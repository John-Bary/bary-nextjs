const React = require("react");
const ReactDOM = require("react-dom");
const { Slot } = require("@radix-ui/react-slot");

const SelectContext = React.createContext({
  open: false,
  setOpen: () => {},
  value: undefined,
  label: undefined,
  setValue: () => {},
});

function Root({ children, value, defaultValue, onValueChange, defaultOpen }) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const [label, setLabel] = React.useState();
  const [open, setOpen] = React.useState(defaultOpen ?? false);
  const currentValue = value !== undefined ? value : internalValue;

  const setValue = (next, labelValue) => {
    if (value === undefined) setInternalValue(next);
    if (labelValue !== undefined) setLabel(labelValue);
    onValueChange?.(next);
  };

  return React.createElement(
    SelectContext.Provider,
    { value: { open, setOpen, value: currentValue, label, setValue } },
    children
  );
}

function Trigger(props) {
  const { open, setOpen } = React.useContext(SelectContext);
  return React.createElement(Slot, {
    ...props,
    role: "combobox",
    "aria-expanded": open,
    onClick: (event) => {
      props.onClick?.(event);
      setOpen(!open);
    },
  });
}

function Value({ placeholder, children, ...props }) {
  const { value, label } = React.useContext(SelectContext);
  const display = children ?? label ?? value ?? placeholder ?? null;
  return React.createElement("span", { ...props }, display);
}

function Portal({ children }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(children, document.body);
}

const Content = React.forwardRef(function Content({ children, className = "", ...props }, forwardedRef) {
  const { open } = React.useContext(SelectContext);
  if (!open) return null;
  return React.createElement(
    Portal,
    null,
    React.createElement("div", { className, role: "listbox", ref: forwardedRef, ...props }, children)
  );
});

const Item = React.forwardRef(function Item({ children, value, className = "", disabled, ...props }, forwardedRef) {
  const { setValue, value: current, setOpen } = React.useContext(SelectContext);
  const isSelected = current === value;
  return React.createElement(
    "div",
    {
      role: "option",
      "aria-selected": isSelected,
      "data-state": isSelected ? "checked" : "unchecked",
      "data-disabled": disabled ? "true" : undefined,
      tabIndex: disabled ? -1 : 0,
      className,
      ref: forwardedRef,
      onClick: (event) => {
        if (disabled) return;
        props.onClick?.(event);
        const labelText = typeof children === "string" ? children : undefined;
        setValue(value, labelText);
        setOpen(false);
      },
      ...props,
    },
    children
  );
});

const Group = (props) => React.createElement("div", props);
const Label = (props) => React.createElement("div", props);
const ScrollUpButton = (props) => React.createElement("div", props);
const ScrollDownButton = (props) => React.createElement("div", props);
const Viewport = (props) => React.createElement("div", props);
const Separator = (props) => React.createElement("div", props);
const Icon = Slot;
const ItemIndicator = (props) => React.createElement("span", props);
const ItemText = (props) => React.createElement("span", props);

module.exports = {
  Root,
  Trigger,
  Value,
  Portal,
  Content,
  Item,
  Group,
  Label,
  ScrollUpButton,
  ScrollDownButton,
  Viewport,
  Separator,
  Icon,
  ItemIndicator,
  ItemText,
};
