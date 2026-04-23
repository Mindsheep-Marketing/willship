import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useContext } from "react";
import ModalContext from "../../context/ModalContext";

interface ModalHeaderProps {
  text: string;
  onClose?: () => void;
}

const ModalHeader = ({ text, onClose }: ModalHeaderProps) => {
  const { closeAllModals } = useContext(ModalContext);

  return (
    <div className="relative flex flex-row items-center bg-darkBlue w-full h-16 justify-between rounded-t-md text-center"> 
      <Image height={64} width={55} src="/assets/images/logo.webp" alt="logo" />
      <h2 className="text-white text-base sm:text-2xl font-medium">{text}</h2>
      <div className="h-full aspect-square flex justify-center items-center">
        <XIcon 
          className="text-white h-6 w-6 hover:cursor-pointer" 
          onClick={onClose || closeAllModals}
          />
      </div>
    </div>
  );
};

export default ModalHeader;