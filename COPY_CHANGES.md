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

## Landing page hierarchy refresh
- **Hero (components/landing/Hero.tsx)**: Headline shifted to "Ship a conversion-ready site, CRM, and paid read in 6–8 weeks." with tighter subhead and bullet promises (clearer benefits and hierarchy).
- **Services (components/landing/summary/HomeServices.tsx)**: Section retitled "Three ways to work together" with concise audience lines and outcome statements; shared principles bulletized (scannability and consistency).
- **Case studies (components/landing/summary/HomeCaseStudies.tsx)**: Section description shortened and card content converted to labeled bullet points (reduces wall-of-text feel).
- **Pricing (components/landing/summary/Pricing.tsx)**: Intro copy trimmed to emphasize fixed scopes and inclusions; CTA updated to point to the contact section (clarity on next step).
- **FAQ (components/landing/summary/HomeFAQ.tsx)**: Intro tightened and questions phrased as user prompts in an accordion layout (readability and space efficiency).
- **Final CTA (components/landing/summary/ContactCta.tsx)**: Description simplified to focus on takeaways from the intro call plus transparent pricing ranges (directness and alignment to primary CTA).
