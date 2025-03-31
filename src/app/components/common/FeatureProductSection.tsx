import React from "react";
import FeatureCard from "./FeatureCard";

export default function FeatureProductSection({ data,scale }: any) {
  return (
    <div className="max-w-7xl m-auto p-4 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data &&
          data.map((featureproduct: any, index: any) => (
            <FeatureCard key={index} scale={scale} data={featureproduct} />
          ))}
      </div>
    </div>
  );
}
