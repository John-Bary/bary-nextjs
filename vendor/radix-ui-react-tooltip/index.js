const React = require("react");
const ReactDOM = require("react-dom");
const { Slot } = require("@radix-ui/react-slot");

const TooltipContext = React.createContext({ open: false, setOpen: () => {} });

function Provider({ children, delayDuration = 150 }) {
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef();

  const value = React.useMemo(() => ({ open, setOpen, delayDuration, timer }), [open, delayDuration]);
  return React.createElement(TooltipContext.Provider, { value }, children);
}

function Root({ children, delayDuration = 150 }) {
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef();
  const value = React.useMemo(() => ({ open, setOpen, delayDuration, timer }), [open, delayDuration]);
  return React.createElement(TooltipContext.Provider, { value }, children);
}

function Trigger(props) {
  const { setOpen, delayDuration, timer } = React.useContext(TooltipContext);
  const handleOpen = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(true), delayDuration);
  };
  const handleClose = () => {
    clearTimeout(timer.current);
    setOpen(false);
  };

  return React.createElement(Slot, {
    ...props,
    onMouseEnter: (event) => {
      props.onMouseEnter?.(event);
      handleOpen();
    },
    onFocus: (event) => {
      props.onFocus?.(event);
      handleOpen();
    },
    onMouseLeave: (event) => {
      props.onMouseLeave?.(event);
      handleClose();
    },
    onBlur: (event) => {
      props.onBlur?.(event);
      handleClose();
    },
  });
}

function Portal({ children }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(children, document.body);
}

const Content = React.forwardRef(function Content(
  { children, className = "", side = "top", align = "center", ...props },
  forwardedRef
) {
  const { open } = React.useContext(TooltipContext);
  if (!open) return null;
  return React.createElement(
    Portal,
    null,
    React.createElement(
      "div",
      {
        role: "tooltip",
        className,
        "data-side": side,
        "data-align": align,
        ref: forwardedRef,
        ...props,
      },
      children
    )
  );
});

const Arrow = (props) => React.createElement("div", props);

module.exports = {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
};
