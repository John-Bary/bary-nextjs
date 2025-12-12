const React = require("react");
const ReactDOM = require("react-dom");
const { Slot } = require("@radix-ui/react-slot");

const MenuContext = React.createContext({ open: false, setOpen: () => {} });

function Root({ children, open, defaultOpen, onOpenChange }) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen ?? false);
  const isControlled = open !== undefined;
  const currentOpen = isControlled ? open : uncontrolledOpen;

  const setOpen = (next) => {
    if (!isControlled) setUncontrolledOpen(next);
    onOpenChange?.(next);
  };

  return React.createElement(MenuContext.Provider, { value: { open: currentOpen, setOpen } }, children);
}

function Trigger(props) {
  const { open, setOpen } = React.useContext(MenuContext);
  return React.createElement(Slot, {
    ...props,
    "aria-expanded": open,
    onClick: (event) => {
      props.onClick?.(event);
      setOpen(!open);
    },
  });
}

function Portal({ children }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(children, document.body);
}

const Content = React.forwardRef(function Content(
  { children, className = "", align = "start", ...props },
  forwardedRef
) {
  const { open, setOpen } = React.useContext(MenuContext);
  const localRef = React.useRef(null);
  const mergedRef = (node) => {
    localRef.current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (localRef.current && !localRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open, setOpen]);

  if (!open) return null;

  const node = React.createElement(
    "div",
    { role: "menu", ref: mergedRef, className, "data-align": align, ...props },
    children
  );

  return React.createElement(Portal, null, node);
});

const Item = React.forwardRef(function Item({ children, className = "", onSelect, ...props }, forwardedRef) {
  const { setOpen } = React.useContext(MenuContext);
  return React.createElement(
    "button",
    {
      type: "button",
      role: "menuitem",
      className,
      ref: forwardedRef,
      onClick: (event) => {
        onSelect?.(event);
        props.onClick?.(event);
        setOpen(false);
      },
      ...props,
    },
    children
  );
});

const Label = React.forwardRef((props, ref) => React.createElement("div", { role: "presentation", ref, ...props }));
const Separator = React.forwardRef((props, ref) => React.createElement("div", { role: "separator", ref, ...props }));
const Group = React.forwardRef((props, ref) => React.createElement("div", { role: "group", ref, ...props }));

module.exports = {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
  Label,
  Separator,
  Group,
};
