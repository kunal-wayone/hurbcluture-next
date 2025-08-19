import React from "react";

interface BrandFiltersProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const BrandFilters: React.FC<BrandFiltersProps> = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex gap-3 mb-4 flex-wrap">
      {["All", ...categories].map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-3 py-1 rounded ${
            selected === category
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default BrandFilters;
