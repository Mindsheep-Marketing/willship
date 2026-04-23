import parse from 'html-react-parser';
import React, { useState } from 'react';
import { RiZoomInLine } from 'react-icons/ri';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const RenderGrid = ({ items, listType }: { items: string[], listType?: 'dots' | 'numbers' }) => {
  // Set numColumns to the length of the items array
  const numColumns = Math.min(items.length, 4);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const slides = items.map((item) => ({
    src: item,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item, width: 320, height: 213 },
      { src: item, width: 640, height: 426 },
      { src: item, width: 1200, height: 800 },
      { src: item,  width: 2048, height: 1365 },
      { src: item, width: 3840, height: 2560 },
    ],
  }));

  let [index, imageIndex] = useState(0);

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-${numColumns} mt-6 gap-4`}>
      {items.map((item, i) => (
        <div key={i} className="ss-gallery-img overflow-hidden rounded duration-300" onClick={() => {setOpen(true); imageIndex(i); setImage(item)}}>
          {/* <div className="pointer-events-none"><RiZoomInLine/></div> */}
          <img className='duration-300 hover:scale-110 cursor-pointer w-full h-full object-cover 'src={(parse(item) as string)}
          ></img>
        </div>
      ))}
       {/* <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        slides={slides}
      /> */}
    </div>
    
  );
};

export default RenderGrid;
