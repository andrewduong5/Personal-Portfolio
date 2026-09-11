import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    const handleHashScroll = () => {
      const { hash } = window.location;
      if (hash) {
        const id = decodeURIComponent(hash.slice(1));
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashScroll);
    handleHashScroll();

    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return null;
}