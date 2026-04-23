import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRef, useState } from "react";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";

interface Props {
  menuItem: {
    heading: string;
    links: {
      linkText: string;
      linkTo: string;
    }[]
  };
};

const DropdownLink = ({menuItem} : Props) => {

  const [showMenu, setShowMenu] = useState (false);
  const ref = useRef(null);

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  useOnClickOutside(ref, handleCloseMenu);

  return (
    <div className="flex flex-row relative justify-start text-base" ref={ref}>
      <div 
        className="flex flex-row items-center gap-1 hover:cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        <p className="font-medium text-lg">{menuItem.heading}</p>
        <ChevronDownIcon className={`h-6 w-6 ${showMenu && '-rotate-180'} transition-all`} />
      </div>
      <div className={`absolute ${showMenu ? 'flex flex-col' : 'hidden'} w-96  p-4 top-6 bg-darkBlue rounded-lg gap-2`}>
        {menuItem.links.map((link, i) => (
          <Link key={i} href={link.linkTo}>
            <a className="border-grey border-b rounded-lg px-3 py-1 hover:bg-lightBlue">
              <div className="">
                {link.linkText}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownLink;