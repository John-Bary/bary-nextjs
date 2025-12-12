const React = require("react");
const ReactDOM = require("react-dom");
const { Slot } = require("@radix-ui/react-slot");

const DialogContext = React.createContext({ open: false, setOpen: () => {} });

function DialogRoot({ children, open, defaultOpen, onOpenChange }) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen ?? false);
  const isControlled = open !== undefined;
  const currentOpen = isControlled ? open : uncontrolledOpen;

  const setOpen = (next) => {
    if (!isControlled) {
      setUncontrolledOpen(next);
    }
    onOpenChange?.(next);
  };

  return React.createElement(DialogContext.Provider, { value: { open: currentOpen, setOpen } }, children);
}

function DialogTrigger(props) {
  const { setOpen } = React.useContext(DialogContext);
  return React.createElement(Slot, {
    ...props,
    onClick: (event) => {
      props.onClick?.(event);
      setOpen(true);
    },
    "data-state": "closed",
  });
}

function DialogPortal({ children }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(children, document.body);
}

function DialogOverlay({ className = "", ...props }) {
  const { open } = React.useContext(DialogContext);
  if (!open) return null;
  return React.createElement("div", {
    ...props,
    className,
    "data-state": open ? "open" : "closed",
    onClick: (event) => props.onClick?.(event),
  });
}

const DialogContent = React.forwardRef(function DialogContent(
  { children, className = "", onPointerDownOutside, ...props },
  forwardedRef
) {
  const { open, setOpen } = React.useContext(DialogContext);

  React.useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }
  }, [open, setOpen]);

  if (!open) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onPointerDownOutside?.(event);
      setOpen(false);
    }
  };

  return React.createElement(
    DialogPortal,
    null,
    React.createElement(
      React.Fragment,
      null,
      React.createElement(DialogOverlay, {
        className: "dialog-overlay",
        onClick: handleOverlayClick,
      }),
      React.createElement(
        "div",
        {
          role: "dialog",
          "aria-modal": true,
          className,
          "data-state": open ? "open" : "closed",
          ref: forwardedRef,
          ...props,
        },
        children
      )
    )
  );
});

const DialogTitle = React.forwardRef(function DialogTitle(props, forwardedRef) {
  return React.createElement("h2", { ...props, ref: forwardedRef });
});

const DialogDescription = React.forwardRef(function DialogDescription(props, forwardedRef) {
  return React.createElement("p", { ...props, ref: forwardedRef });
});

function DialogClose(props) {
  const { setOpen } = React.useContext(DialogContext);
  return React.createElement(Slot, {
    ...props,
    onClick: (event) => {
      props.onClick?.(event);
      setOpen(false);
    },
  });
}

module.exports = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
};
