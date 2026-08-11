import { useEffect, useState } from "react";

/**
 * Full-bleed portrait background for the hero. Displays your professional photo
 * positioned on the right side with a gradient overlay for text readability.
 */
export default function Portrait() {
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState("/images/namith.png");

  // Force the portrait to be visible after a delay
  useEffect(() => {
    const id = window.setTimeout(() => setLoaded(true), 600);
    return () => window.clearTimeout(id);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Try JPG if PNG fails
    const img = e.currentTarget;
    if (img.src.endsWith(".png")) {
      setSrc("/images/namith.jpg");
    } else if (img.src.endsWith(".jpg")) {
      // Try WebP as last resort
      setSrc("/images/namith.webp");
    }
    // If all fail, still show the gradient background
    setLoaded(true);
  };

  return (
    <div className={`hero-portrait ${loaded ? "is-loaded" : ""}`} aria-hidden="true">
      <img
        src={src}
        alt="Namith J Portrait"
        loading="eager"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={handleImageError}
        className="portrait-img"
      />
    </div>
  );
}
