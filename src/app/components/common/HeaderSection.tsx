import React from "react";

export default function HeaderSection({
  title,
  subTitle,
  description,
  textColor,
  className: { containerClass, titleClass, subTitleClass, descriptionClass },
}: {
  title: string;
  subTitle: string;
  description: string;
  textColor?: string;
  className?: {
    containerClass?: string;
    titleClass?: string;
    subTitleClass?: string;
    descriptionClass?: string;
  };
}) {
  return (
    <div className={`m-auto mb-8 text-left ${containerClass}`}>
      <h2
        className={`text sm:text-lg font-normal tracking-widest ${
          textColor ? `text-${textColor}-800` : "text-gray-50"
        } ${subTitleClass} mb-3`}
      >
        {subTitle}
      </h2>
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-3xl font-bold ${
          textColor ? `text-${textColor}-800` : "text-dark-primary"
        } ${titleClass}  mb-4 `}
      >
        {title}
      </h2>
      <p
        className={`text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] font-thin line-clamp-3 md:line-clamp-none ${
          textColor ? `text-${textColor}-500` : "text-secondary"
        } ${descriptionClass} mt-4 `}
      >
        {description}
      </p>
    </div>
  );
}
