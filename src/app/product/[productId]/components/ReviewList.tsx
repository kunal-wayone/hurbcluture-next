"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoStar, IoStarOutline } from "react-icons/io5";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { Fetch } from "../../../../hooks/apiutils";

interface Review {
  _id: string;
  userId: string;
  productId: string;
  rating: number;
  review: string;
  createdAt: string;
}

export default function ReviewList() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [reviewNo, setReviewNo] = useState<number>(2);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await Fetch("/api/review", undefined, 5000, false);
        const data: any = response;
        if (data.success) {
          setReviews(data.data.result);
        } else {
          setError(data.message);
        }
      } catch (err: any) {
        setError("Failed to fetch reviews");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <AnimatePresence>
        {reviews.slice(0, reviewNo).map((review) => (
          <motion.div
            key={review._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mb-8"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4">
              <div className="flex items-center gap-6 mb-2 lg:mb-0">
                <div>
                  <Image
                    src="/assets/logo/logo.png"
                    alt="User Image"
                    width={100}
                    height={100}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </div>
                <h3 className="text-base lg:text-2xl font-medium">
                  Alexender Billy
                </h3>
                <p>2 months ago</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">{review.rating}</span>
                <span className="flex items-center gap-1">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, index) => (
                      <IoStar
                        key={index}
                        className="text-base text-yellow-500"
                      />
                    ))}
                  {Array(5 - review.rating)
                    .fill(0)
                    .map((_, index) => (
                      <IoStarOutline
                        key={index}
                        className="text-base text-gray-400"
                      />
                    ))}
                </span>
              </div>
            </div>
            <p className="text-sm mb-8">{review.review}</p>
            <hr className="w-4/5" />
          </motion.div>
        ))}
      </AnimatePresence>

      <div>
        <span
          className="flex items-center font-medium text-primary cursor-pointer"
          onClick={() => setReviewNo(reviewNo === 2 ? 5 : 2)}
        >
          View All Reviews
          <IoMdArrowDropdown className="text-2xl" />
        </span>
      </div>

      {loading && <p>Loading reviews...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
