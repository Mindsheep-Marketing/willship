import React from "react";

const SectionSection = ({children, bgColour, classes} : {children: React.ReactNode; bgColour ?: string; classes ?: string}) => (
  <section className={`w-full flex flex-col px-4 py-12 items-center ${bgColour && bgColour} ${classes && classes}`}>
    <div className="w-full max-w-5xl flex flex-col items-center">
      {children}
    </div>
  </section>
);

export default SectionSection;