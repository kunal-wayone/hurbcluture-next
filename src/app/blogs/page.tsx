"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Fetch } from "../../hooks/apiutils";
import AuthGuard from "../components/common/AuthGuard";
import Wrapper from "../components/common/Wrapper";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "All"
  );
  const [blogs, setBlogs] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]); // For categories
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        // Fetch blogs based on selected category and currentPage
        const response: any = await Fetch(
          `/api/blog??blogCategoruyName=${selectedCategory}&page=${currentPage}`,
          undefined,
          5000,
          false
        );
        if (!response?.success) {
          setError(response?.message || "Failed to fetch blogs.");
        }
        const data = response?.data?.result;
        setBlogs(data);
        setTotalPages(response?.data?.pagination?.totalPages || 1); // Set totalPages from API
      } catch (error: any) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [selectedCategory, currentPage]); // Trigger when category or page changes

  // Fetch categories (you could have a separate endpoint for categories)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response: any = await Fetch(
          "/api/blog-category",
          undefined,
          5000,
          false
        );
        if (response?.success) {
          setCategories(response?.data?.result || []);
        }
      } catch (error: any) {
        setError("Failed to fetch categories.");
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when changing category
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className=" bg-white text-dark-primary text-center p-4 lg:p-16">
        <div className="loading-indicator">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className=" bg-white text-dark-primary text-center p-4 lg:p-16">
        <div className="error-message">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className=" bg-white text-dark-primary text-center p-4 lg:p-16">
        <div className="no-data-message">
          <p>No blogs available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <AuthGuard>
      <Wrapper>
        <div className=" bg-white text-dark-primary text-center ">
          {/* Hero Section */}
          <div className="relative w-full h-[500px] 2xl:h-[700px] lg:h-screen">
            <Image
              src="/assets/banner/blogbanner1.svg"
              alt="Hero"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col md:flex-row justify-center items-end pb-28 text-white text-left px-4">
              <div className="w-full lg:w-4/5 flex flex-col lg:flex-row pt-32 lg:pt-0 items-center justify-between text-white">
                <div className="w-full lg:w-3/5 ">
                  <p className="text-lg mb-6 p-1.5 bg-white/70 font-semibold text-gray-700 w-fit px-8 rounded-full">
                    Herbs
                  </p>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Herbs have weak stem
                  </h2>
                  <p className="max-w-2xl text-lg text-white">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature from
                    45 BC, making it over 2000 years old. Richard McClintock, a
                    Latin professor at Hampden-Sydney College in
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 w-full lg:w-2/5 flex flex-col items-end space-y-4">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/assets/profile/dr.svg"
                      alt="Author"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <h3 className="text-white text-lg font-medium">Anuj Tiwari</h3>
                  </div>
                  <div className="text-lg text-gray-300 space-x-2">
                    <span>10 min read</span>
                    <span>• 2 months ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Section */}
          <div className="max-w-7xl mx-auto p-4 lg:p-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Blog</h2>
            <p className="mb-8 text-gray-600 line-clamp-6">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It
              has roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in
            </p>

            <div className="mb-6">
              <Swiper
                spaceBetween={10}
                slidesPerView={12}
                loop={false}
                grabCursor={true}
                pagination={false}
                navigation={false}
                breakpoints={{
                  320: { slidesPerView: 3 },
                  768: { slidesPerView: 5.5 },
                }}
                modules={[Navigation, Pagination]}
                className="flex gap-4"
              >
                {[{ name: "All" }, ...categories].map((category, index) => (
                  <SwiperSlide key={index} className="flex justify-center">
                    <button
                      onClick={() => handleCategorySelect(category?.name)}
                      className={`text-base font-medium px-4 ${selectedCategory === category?.name
                        ? "text-primary border-b boerder-primary "
                        : "bg-transparent text-gray-400 hover:text-black"
                        }`}
                    >
                      {category?.name}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white overflow-hidden transition-shadow p-4"
                >
                  <div className="relative p-4 h-52 w-full rounded-3xl overflow-hidden mb-3">
                    <Image
                      src={
                        blog.coverImage
                          ? `/api/image?url=${blog?.coverImage}`
                          : "/assets/featureproduct/f11.png"
                      }
                      alt={blog.title}
                      fill
                      className="object-cover h-full w-full "
                    />
                    <p className="absolute text-lg mb-6 p-1.5 bg-white/70 font-semibold text-gray-700 w-fit px-8 rounded-full">
                      {blog.blogCategoryName[0]}
                    </p>
                  </div>
                  <div>
                    {/* <div className="text-lg flex items-center justify-start text-gray-500 space-x-2">
                  <span>{blog.readTime}</span>
                  <span>• {blog.postedAgo}</span>
                </div> */}
                    <h3 className="text-2xl font-bold mt-2 text-justify line-clamp-3 ">
                      {blog.title}
                    </h3>
                    <p className="text-gray-800 line-clamp-4 text-lg font-medium text-justify ">
                      {blog.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-8 flex justify-center space-x-4">
              {currentPage > 1 && (
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="px-4 py-2 bg-primary text-white rounded-md"
                >
                  Previous
                </button>
              )}
              {currentPage < totalPages && (
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-4 py-2 bg-primary text-white rounded-md"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </AuthGuard>
  );
}
