import { JSX } from "react";

/**
 * Renders an SVG icon dynamically from the Simple Icons CDN.
 *
 * @param {string} slug - The icon slug (e.g. "react", "dotnet", "docker").
 * @returns {JSX.Element}
 */
export function renderIcon(slug: string): JSX.Element {
  const src = `https://cdn.simpleicons.org/${slug.toLowerCase()}?viewbox=auto`;

  return (
    <img
      src={src}
      alt={slug}
      title={slug}
      className="w-5 h-5 shrink-0"
      loading="lazy"
    />
  );
}