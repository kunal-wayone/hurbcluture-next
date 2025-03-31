import React from "react";
import CategoryCard from "./CategoryCard";

export default function BrowseCategory({ title, data }: any) {
  return (
    <div className="max-w-7xl m-auto p-4 lg:px-16">
      <h2 className="text-dark-primary text-xl font-bold font-[raleway] mb-4">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data &&
          data?.content.map((featureproduct: any, index: any) => (
            <CategoryCard key={index} data={featureproduct} />
          ))}
      </div>
    </div>
  );
}
