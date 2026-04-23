import { useEffect, useState } from "react";

const useGetScreenSize = () => {
  const [screenSize, setScreenSize] = useState<
    "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  > ("xs");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setScreenSize(
        width < 640 
          ? "xs"
          : width < 768
          ? "sm"
          : width < 960
          ? "md"
          : width < 1024
          ? "md"
          : width < 1536
          ? "xl"
          : "2xl"
      );
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useGetScreenSize;
