import React from "react";

export default function HeaderSection({
  title,
  subTitle,
  description,
  textColor,
}: {
  title: string;
  subTitle: string;
  description: string;
  textColor?: string;
}) {
  return (
    <div className="lg:w-5/6 m-auto mb-8 text-center">
      <h2
        className={`text sm:text-lg font-normal tracking-widest ${
          textColor ? `text-${textColor}-800` : "text-gray-50"
        }  mb-3`}
      >
        {subTitle}
      </h2>
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold ${
          textColor ? `text-${textColor}-800` : "text-dark-primary"
        }  mb-4 `}
      >
        {title}
      </h2>
      <p
        className={`text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] font-thin line-clamp-3 md:line-clamp-none ${
          textColor ? `text-${textColor}-500` : "text-secondary"
        } mt-4 `}
      >
        {description}
      </p>
    </div>
  );
}
