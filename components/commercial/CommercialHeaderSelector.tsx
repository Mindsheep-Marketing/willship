import React from "react";
import siteMap from "../../siteMap";
import Button from "../common/Button";

const CommercialHeaderSelector = () => {

  const selectorStyles = {
    wrapper: 'w-full max-w-7xl flex flex-row flex-wrap 2xl:flex-nowrap gap-8 2xl:gap-20 justify-center px-4 sm:px-0',
    container: 'w-full sm:w-1/3 2xl:w-1/4 flex flex-col items-center gap-2 pb-14 relative hover:cursor-pointer',
    image: 'w-32 aspect-square relative rounded-full border-black border overflow-hidden',
    textWrapper: 'w-full flex flex-col items-center justify-center text-white text-xl font-medium text-center',
    secondRow: 'text-base font-normal',
    buttonWrapper: 'absolute bottom-0 w-full',
  }

  return (
    <div className={selectorStyles.wrapper}>

      <div className={selectorStyles.container}>
        <div className={selectorStyles.buttonWrapper}>
          <Button
            // linkTo={siteMap.chinaToAustralia.personalOrBusiness.path}
            linkTo={siteMap.chinaToAustralia.path}
            buttonText="China to Australia"
            theme="whiteBlue"
          />
        </div>
      </div>

      <div className={selectorStyles.container}>
        <div className={selectorStyles.buttonWrapper}>
          <Button
            linkTo={siteMap.indiaToAustralia.path}
            buttonText="India to Australia"
            theme="whiteBlue"
          />
        </div>
      </div>

      <div className={selectorStyles.container}>
        <div className={selectorStyles.buttonWrapper}>
          <Button
            linkTo={siteMap.vietnamToAustralia.path}
            buttonText="Vietnam to Australia"
            theme="whiteBlue"
          />
        </div>
      </div>

      <div className={selectorStyles.container}>
        <div className={selectorStyles.buttonWrapper}>
          <Button
            linkTo={siteMap.pacificIslands.path}
            buttonText="Pacific Islands"
            theme="whiteBlue"
          />
        </div>
      </div>
      
    </div>
  );
};

export default CommercialHeaderSelector;