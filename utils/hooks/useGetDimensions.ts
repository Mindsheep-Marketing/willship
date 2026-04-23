import { RefObject, useEffect, useState } from "react";

function useGetDimensions <T extends HTMLElement = HTMLElement> (
  ref: RefObject<T>
) : number {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const header = document.getElementById('header')?.getBoundingClientRect();
    
    const newHeight = document.querySelector('#header')?.getBoundingClientRect().height;
    
    newHeight && setHeight(Math.floor(newHeight));
  }, [ref]);
  return height;
};

export default useGetDimensions;