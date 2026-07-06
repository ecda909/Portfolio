// Self-hosted fonts (no external requests)
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';

// Reliable scroll-to-hash: the home page grows as images/animations settle,
// so the browser's one-shot hash scroll misses. Re-scroll a few times.
const scrollToHash = () => {
  if (typeof window === 'undefined' || !window.location.hash) return;
  const id = decodeURIComponent(window.location.hash.slice(1));
  [80, 300, 700, 1100].forEach((delay) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, delay);
  });
};

export const onInitialClientRender = () => scrollToHash();
export const onRouteUpdate = ({ location, prevLocation }) => {
  if (location.hash && (!prevLocation || prevLocation.pathname !== location.pathname || prevLocation.hash !== location.hash)) {
    scrollToHash();
  }
};
