export type AnalyticsEvent = {
  name: string;
  payload?: Record<string, unknown>;
};

/**
 * Lightweight analytics dispatcher without vendor lock-in.
 * Consumers can listen for the `bary-analytics` event on `window`.
 */
export function trackEvent(name: string, payload?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  const event: AnalyticsEvent = { name, payload };
  window.dispatchEvent(new CustomEvent("bary-analytics", { detail: event }));
  if (process.env.NODE_ENV !== "production") {
    console.debug("analytics", event);
  }
}
