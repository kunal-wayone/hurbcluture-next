"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Post } from "../../hooks/apiutils";
import { toast } from "react-toastify";

interface ReviewModalProps {
  userId: string;
  productId: string;
  onClose: () => void;
}

interface ReviewData {
  userId: string;
  productId: string;
  rating: number;
  review: string;
}

interface FormData {
  rating: string;
  review: string;
}

interface FormErrors {
  rating?: string;
  review?: string;
  api?: string;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  userId,
  productId,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    rating: "",
    review: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    const ratingValue = Number(formData.rating);

    if (!ratingValue || ratingValue < 1 || ratingValue > 5) {
      newErrors.rating = "Rating must be between 1 and 5.";
    }

    if (!formData.review.trim()) {
      newErrors.review = "Review cannot be empty.";
    }

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const reviewPayload: ReviewData = {
      userId,
      productId,
      rating: parseInt(formData.rating),
      review: formData.review.trim(),
    };

    try {
      setIsLoading(true);

      await Post("/api/review", reviewPayload);
      toast.success("Review submitted successfully!");

      onClose();
    } catch (error: any) {
      const message = error?.response?.data?.message || "Something went wrong.";
      toast.error(message);
      setErrors({ api: message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Write a Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Rating Field */}
          <div>
            <label className="block mb-1 font-medium">Rating (1-5)</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min={1}
              max={5}
              className="w-full border rounded-lg outline-0 border-gray-300 px-3 py-2"
            />
            {errors.rating && (
              <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
            )}
          </div>

          {/* Review Field */}
          <div>
            <label className="block mb-1 font-medium">Review</label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
              rows={4}
              className="w-full border rounded-lg outline-0 border-gray-300 px-3 py-2"
            />
            {errors.review && (
              <p className="text-red-500 text-sm mt-1">{errors.review}</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl text-xs lg:text-base py-1 lg:py-2 px-4 lg:px-8 
              text-red-500 border border-primary 
               hover:scale-105
              active:scale-95 
              transition-all duration-300 ease-in-out shadow-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-2xl text-xs lg:text-base py-1 lg:py-2 px-4 lg:px-8
             text-primary border border-primary
              hover:scale-105  
             active:scale-95
             transition-all duration-300 ease-in-out shadow-md"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
