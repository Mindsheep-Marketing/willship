import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import ModalContext from "../../context/ModalContext";
import siteMap from "../../siteMap";
import Button from "../common/Button";

const VietnamHeaderSelector = () => {

  const {showCommercialQuote} = useContext(ModalContext);

  const router = useRouter();

  const selectorStyles = {
    wrapper: 'w-full max-w-7xl flex flex-row flex-wrap 2xl:flex-nowrap gap-8 2xl:gap-20 justify-center px-4 sm:px-0',
    container: 'w-full sm:w-1/3 2xl:w-1/6 flex flex-col items-center gap-2 pb-14 relative hover:cursor-pointer',
    image: 'w-32 aspect-square relative rounded-full border-black border overflow-hidden',
    textWrapper: 'w-full flex flex-col items-center justify-center text-white text-xl font-medium text-center',
    secondRow: 'text-base font-normal',
    buttonWrapper: 'absolute bottom-0 w-full max-w-xs',
  }

  return (
    <div className={selectorStyles.wrapper}>
      <div 
        className={selectorStyles.container}
        onClick={() => {
          // Trigger paperform popup programmatically
          const paperformButton = document.querySelector('[data-paperform-id="mlc28uxr"]') as HTMLElement;
          if (paperformButton) {
            paperformButton.click();
          }
        }}
      >
        <div className={selectorStyles.image}>
          <Image src='/assets/images/containers4.webp' layout='fill' objectFit="cover" alt='FCL Shipping' />
        </div>
        <div className={selectorStyles.textWrapper}>
          <h3>
            FCL
          </h3>
          <p className={selectorStyles.secondRow}>
            (Full container load)
          </p>
        </div>
        <div className={selectorStyles.buttonWrapper}>
          <Button
            linkTo={'paperform'}
            dataPaperformId={'mlc28uxr'}
            dataPaperformPopup={true}
            buttonText="Get Started"
            theme="redBlue"
          />
        </div>
      </div>

      <div 
        className={selectorStyles.container}
        onClick={() => {
          // Trigger paperform popup programmatically
          const paperformButton = document.querySelector('[data-paperform-id="mlc28uxr"]') as HTMLElement;
          if (paperformButton) {
            paperformButton.click();
          }
        }}
      >
        <div className={selectorStyles.image}>
          <Image src='/assets/images/lcl-container.jpg' layout='fill' objectFit="cover" alt='FCL Shipping' />
        </div>
        <div className={selectorStyles.textWrapper}>
          <h3>
            LCL
          </h3>
          <p className={selectorStyles.secondRow}>
            (Less than a container load)
          </p>
        </div>
        <div className={selectorStyles.buttonWrapper}>
          <Button
            linkTo={'paperform'}
            dataPaperformId={'mlc28uxr'}
            dataPaperformPopup={true}
            buttonText="Get Started"
            theme='redBlue'
          />
        </div>
      </div>

      <div 
        className={selectorStyles.container}
        onClick={() => {
          // Trigger paperform popup programmatically
          const paperformButton = document.querySelector('[data-paperform-id="mlc28uxr"]') as HTMLElement;
          if (paperformButton) {
            paperformButton.click();
          }
        }}      >
        <div className={selectorStyles.image}>
          <Image src='/assets/images/airport2.jpg' layout='fill' objectFit="cover" alt='FCL Shipping' />
        </div>
        <div className={selectorStyles.textWrapper}>
          <h3>
            Air Freight
          </h3>
        </div>
        <div className={selectorStyles.buttonWrapper}>
          <Button
            linkTo={'paperform'}
            dataPaperformId={'mlc28uxr'}
            dataPaperformPopup={true}
            buttonText="Get Started"
            theme='redBlue'
          />
        </div>
      </div>
      <div 
        className={selectorStyles.container}
        onClick={() => router.push(siteMap.contact.path)}
      >
        <div className={selectorStyles.image}>
          <Image src='/assets/images/question.jpg' layout='fill' objectFit="cover" alt='FCL Shipping' />
        </div>
        <div className={selectorStyles.textWrapper}>
          <h3>
            Something else?
          </h3>
        </div>
        <div className={selectorStyles.buttonWrapper}>
          <Button
            theme='whiteBlue'
            buttonText="Contact Us"
            linkTo={siteMap.contact.path}
          />
        </div>
      </div>
    </div>
  );
};

export default VietnamHeaderSelector;