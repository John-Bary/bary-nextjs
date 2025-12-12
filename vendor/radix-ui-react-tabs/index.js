const React = require("react");
const { Slot } = require("@radix-ui/react-slot");

const TabsContext = React.createContext({ value: undefined, setValue: () => {} });

function Root({ children, value, defaultValue, onValueChange, orientation = "horizontal", className }) {
  const [internal, setInternal] = React.useState(defaultValue);
  const current = value !== undefined ? value : internal;

  const setValue = (next) => {
    if (value === undefined) setInternal(next);
    onValueChange?.(next);
  };

  return React.createElement(
    "div",
    { className },
    React.createElement(
      TabsContext.Provider,
      { value: { value: current, setValue, orientation } },
      children
    )
  );
}

const List = React.forwardRef(function List(props, forwardedRef) {
  const { orientation } = React.useContext(TabsContext);
  return React.createElement("div", { role: "tablist", "data-orientation": orientation, ref: forwardedRef, ...props });
});

function Trigger({ value, ...props }) {
  const { value: current, setValue, orientation } = React.useContext(TabsContext);
  const isActive = current === value;
  return React.createElement(Slot, {
    ...props,
    role: "tab",
    "data-state": isActive ? "active" : "inactive",
    "data-orientation": orientation,
    tabIndex: isActive ? 0 : -1,
    onClick: (event) => {
      props.onClick?.(event);
      setValue(value);
    },
  });
}

const Content = React.forwardRef(function Content({ value, ...props }, forwardedRef) {
  const { value: current, orientation } = React.useContext(TabsContext);
  if (current !== value) return null;
  return React.createElement("div", { role: "tabpanel", "data-orientation": orientation, ref: forwardedRef, ...props });
});

module.exports = { Root, List, Trigger, Content };
