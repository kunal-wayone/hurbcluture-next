"use client";

import React, { useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface SubCategory {
  id: number;
  name: string;
  subChildCategories?: SubCategory[];
}

interface Category {
  id: number;
  name: string;
  subCategories: SubCategory[];
}

const CategoryDropdown: React.FC<{ categories: Category[] }> = ({ categories }) => {
  const router = useRouter();

  // Track hovered category and subcategory for showing their dropdowns
  const [hoveredCategoryId, setHoveredCategoryId] = useState<number | null>(null);
  const [hoveredSubCategoryId, setHoveredSubCategoryId] = useState<number | null>(null);

  const handleSubCategoryClick = (categoryId: number, subCategoryId: number) => {
    router.push(`/category?id=${categoryId}&subcategory=${subCategoryId}`);
  };

  const handleSubSubCategoryClick = (catId: number, subCatId: number, subSubCatId: number) => {
    router.push(`/category?id=${catId}&subcategory=${subCatId}&subsubcategory=${subSubCatId}`);
  };

  return (
    <div className="relative group flex flex-col items-start">
      {/* Main button */}
      <button className="flex items-center gap-2 p-2 text-dark-primary hover:text-primary transition-colors duration-300 ease-in-out">
        <BiCategoryAlt className="text-3xl" />
        All Categories
      </button>

      {/* Categories Dropdown - visible on hover over entire container */}
      <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-md rounded-md top-12 w-64 z-30 transition-all duration-300 ease-in-out">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className="relative"
            onMouseEnter={() => setHoveredCategoryId(cat.id)}
            onMouseLeave={() => {
              setHoveredCategoryId(null);
              setHoveredSubCategoryId(null);
            }}
          >
            {/* Category button */}
            <button
              className={twMerge(
                "w-full text-left px-4 py-2 hover:bg-blue-100 text-dark-primary hover:text-primary transition-all duration-300 ease-in-out",
                hoveredCategoryId === cat.id && "bg-blue-50 font-semibold text-primary"
              )}
            >
              {cat.name}
            </button>

            {/* Subcategories dropdown */}
            {hoveredCategoryId === cat.id && cat.subCategories.length > 0 && (
              <ul
                className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-md p-3 flex flex-col z-40 transition-all duration-300 ease-in-out"
                onMouseLeave={() => setHoveredSubCategoryId(null)}
              >
                {cat.subCategories.map((subCat) => (
                  <li
                    key={subCat.id}
                    className="relative"
                    onMouseEnter={() => setHoveredSubCategoryId(subCat.id)}
                    onMouseLeave={() => setHoveredSubCategoryId(null)}
                  >
                    <div
                      onClick={() => handleSubCategoryClick(cat.id, subCat.id)}
                      className={twMerge(
                        "text-dark-primary hover:text-primary cursor-pointer px-2 py-1 rounded hover:bg-blue-100 transition-all flex justify-between items-center",
                        hoveredSubCategoryId === subCat.id && "bg-blue-50 font-semibold text-primary"
                      )}
                    >
                      {subCat.name}
                      {/* arrow only if has children */}
                      {subCat.subChildCategories && subCat.subChildCategories.length > 0 && (
                        <span className="ml-2">&#9656;</span>
                      )}
                    </div>

                    {/* Sub-subcategories dropdown */}
                    {hoveredSubCategoryId === subCat.id &&
                      subCat.subChildCategories &&
                      subCat.subChildCategories.length > 0 && (
                        <ul className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-md p-3 flex flex-col z-50 transition-all duration-300 ease-in-out">
                          {subCat.subChildCategories.map((subSubCat) => (
                            <li
                              key={subSubCat.id}
                              className="text-sm text-gray-700 hover:text-primary hover:bg-blue-50 px-2 py-1 rounded cursor-pointer transition-all"
                              onClick={() =>
                                handleSubSubCategoryClick(cat.id, subCat.id, subSubCat.id)
                              }
                            >
                              {subSubCat.name}
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDropdown;
