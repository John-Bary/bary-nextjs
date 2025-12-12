# Copy Changes Log

## Contact form (components/i18n/translations.ts)
- **Service label**: "Service Interest" → "Service Interest *" (clarity that the field is required).
- **Budget helper**: added "Optional" helper text for budget selection (guidance).
- **Response note**: added "We respond within one business day." beneath the message field (expectations).
- **Validation messages**: added explicit guidance for name, email, service, and message requirements in both EN/LT (clarity and error usefulness).
- **Error toast**: added fallback error copy "Message not sent" / "Please try again or email bary@gmx.com directly." (actionable error handling).
- **Lithuanian equivalents**: mirrored the above updates in Lithuanian text (consistency across locales).

## Hero testimonial (components/landing/Hero.tsx)
- Swapped straight quotes around the testimonial for typographic quotes: `"..."` → `&ldquo;...&rdquo;` (readability and lint compliance).

## About section (components/sections/About.tsx)
- Rephrased contractions: "We're... We've... We don't..." → "We are... We have... We do not..." and "We focus on delivering measurable results." (clarity and lint compliance).
