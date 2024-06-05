import { useState, useEffect } from "react";
import { Button } from "../ui/button";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk mendeteksi apakah user sudah scroll halaman
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <Button onClick={scrollToTop} className="fixed bottom-5 right-5  text-white p-2 rounded-full w-10 h-14 text-sm cursor-pointer bg-primary-500 hover:bg-primary-700 focus:outline-none z-50" aria-label="Go to top">
        ↑
      </Button>
    )
  );
};

export default ScrollToTopButton;
