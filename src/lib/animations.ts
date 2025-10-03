// Small helper file exporting animation class names used across the app.
// The project uses Tailwind + tailwindcss-animate, so components import
// class-name strings from here. Keep this minimal so server builds both
// locally and on Vercel.

/** Tailwind class for fade-in-up entrance animation (defined in Tailwind config/plugins) */
export const fadeInUpAnimation = "animate-fade-in-up" as const;

// Default export convenience (some imports might use default)
export default fadeInUpAnimation;
