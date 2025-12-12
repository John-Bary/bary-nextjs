const React = require("react");

const Slot = React.forwardRef(function Slot({ children, asChild, ...slotProps }, forwardedRef) {
  if (!React.isValidElement(children)) {
    return null;
  }
  return React.cloneElement(children, {
    ...slotProps,
    ref: forwardedRef ? forwardedRef : children.ref,
  });
});

module.exports = {
  Slot,
  Root: Slot,
};
