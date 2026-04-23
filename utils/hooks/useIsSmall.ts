import { useEffect, useState } from "react"
import useGetScreenSize from "./useGetScreenSize";

const useIsSmall = () => {
  const [isSmall, setIsSmall] = useState(true);

  const screenSize = useGetScreenSize();

  useEffect(() => {
    setIsSmall(['xs', 'sm', 'md'].includes(screenSize));  
  }, [screenSize]);

  return isSmall;
};

export default useIsSmall;