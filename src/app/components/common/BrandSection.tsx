'use client'

import BrandCard from "./BrandCard";
import { useState } from "react";
import BrandFilters from "./BrandFilter";
import Link from "next/link";

const ITEMS_PER_PAGE = 8;

const BrandSection = (props: any) => {
    const allBrands = props?.data
    console.log(props?.data)
    const categories = Array.from(new Set(allBrands?.map((b) => b.category)));
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredBrands =
        selectedCategory === "All"
            ? allBrands
            : allBrands.filter((b) => b.category === selectedCategory);

    const totalPages = Math.ceil(filteredBrands.length / ITEMS_PER_PAGE);
    const paginatedBrands = filteredBrands.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );


    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset page when category changes
    };

    return (
        <section className="my-10">
            <div className="container mx-auto px-4">
                {/* Filters */}
                <div className="mt-6">
                    <h3 className="font-semibold mb-2">Browse by Category</h3>
                    <BrandFilters
                        categories={categories}
                        selected={selectedCategory}
                        onSelect={handleCategorySelect}
                    />
                </div>

                {/* Brand Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                    {paginatedBrands.map((brand) => (
                        <BrandCard key={brand.id} brand={brand} />
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="mt-6 flex justify-center items-center space-x-4">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded ${currentPage === 1
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-black text-white hover:bg-gray-800"
                                }`}
                        >
                            Previous
                        </button>

                        <span className="text-sm">
                            Page {currentPage} of {totalPages}
                        </span>

                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded ${currentPage === totalPages
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-black text-white hover:bg-gray-800"
                                }`}
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* CTA */}
                <div className="mt-10 text-center hidde">
                    <p className="text-lg mb-2">Want your brand featured here?</p>
                    <Link
                        href="/register"
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                        Become a Brand
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BrandSection;
