"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoLogInOutline } from "react-icons/io5";
import { Post } from "../../hooks/apiutils";
import { differenceInYears } from "date-fns";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type RegisterFormData = {
  name: string;
  email: string;
  phone: string;
  secondaryPhone?: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "Other";
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
  newsletterSubscription: boolean;
  ageDocument: FileList;
};

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();
  const route = useRouter();
  const password = watch("password");

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true);

    try {
      // Age validation logic
      const age = differenceInYears(new Date(), new Date(data.dateOfBirth));
      if (age < 21) {
        toast.info(
          "You must be at least 21 years old to register. Please try again with a valid date of birth."
        );
        return;
      }

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === "aadharCard" && value instanceof FileList && value[0]) {
          formData.append("aadharCard", value[0]);
        } else {
          formData.append(key, value as string);
        }
      });

      const res: any = await Post("/api/user", formData, 5000);
      if (res.success) {
        route.push("/login")
        console.log(res);
        toast.success(
          "Registration successful. Please check your email for the verification link."
        );
        console.log("Registration successful");
      }
    } catch (error: any) {
      console.error("Error during registration:", error);
      toast.error(
        error?.message || "Something went wrong during registration."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen mt-[9.6rem] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url("/assets/banner/loginbanner1.png")' }}
    >
      <div className="p-8 w-full max-w-lg text-center space-y-6">
        <img src="/assets/logo/logo.png" alt="Logo" className="mx-auto h-12" />

        <div>
          <h2 className="text-2xl font-bold text-gray-800">Register</h2>
          <p className="text-sm text-gray-500 mt-1">
            Enter your personal information
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 border rounded-xl text-gray-800 border-[#5BB35B] focus:outline-none focus:ring-2 focus:ring-[#5BB35B]"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-2 border rounded-xl text-gray-800 border-[#5BB35B] focus:outline-none focus:ring-2 focus:ring-[#5BB35B]"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="number"
                placeholder="Phone Number"
                {...register("phone", {
                  valueAsNumber: false,
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit number",
                  },
                })}
                className="w-full px-4 py-2 border rounded-xl text-gray-800 border-[#5BB35B] focus:outline-none focus:ring-2 focus:ring-[#5BB35B]"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="number"
                placeholder="Secondary Phone Number (Optional)"
                {...register("secondaryPhone", {
                  valueAsNumber: false,
                })}
                className="w-full px-4 py-2 border rounded-xl text-gray-800 border-[#5BB35B] focus:outline-none focus:ring-2 focus:ring-[#5BB35B]"
              />
            </div>
            <div>
              <input
                type="date"
                {...register("dateOfBirth", {
                  required: "Date of birth is required",
                })}
                className="w-full px-4 py-2 border rounded-xl text-gray-800 border-[#5BB35B] focus:outline-none focus:ring-2 focus:ring-[#5BB35B]"
              />
              {errors.dateOfBirth && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>
            <div>
              <select
                {...register("gender", { required: "Gender is required" })}
                className="w-full px-4 py-2 border appearance-none rounded-xl text-gray-800 border-[#5BB35B] focus:outline-none focus:ring-2 focus:ring-[#5BB35B]"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.gender.message}
                </p>
              )}
            </div>
          </div>

          <input
            type="password"
            placeholder="Create Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="w-full px-4 py-2 border rounded-xl text-gray-800 border-[#5BB35B] focus:outline-none focus:ring-2 focus:ring-[#5BB35B]"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}

          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="w-full px-4 py-2 border rounded-xl text-gray-800 border-[#5BB35B] focus:outline-none focus:ring-2 focus:ring-[#5BB35B]"
          />
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Upload Aadhar Card (PDF or Image)
            </label>
            <input
              type="file"
              accept=".pdf, image/*"
              {...register("ageDocument", {
                required: "Aadhar card is required for age verification",
              })}
              className="w-full px-4 py-2 border rounded-xl text-gray-800 border-[#5BB35B] file:border-0 file:bg-primary file:text-white file:px-4 file:py-2 file:rounded-md"
            />
            {errors.ageDocument && (
              <p className="text-red-600 text-sm mt-1">
                {errors.ageDocument.message}
              </p>
            )}
          </div>

          <div className="text-sm text-gray-700">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("termsAccepted", {
                  required: "You must accept the terms and conditions",
                })}
              />
              I agree to the terms and conditions
            </label>
            {errors.termsAccepted && (
              <p className="text-red-600 text-sm mt-1">
                {errors.termsAccepted.message}
              </p>
            )}
          </div>

          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" {...register("newsletterSubscription")} />
            Subscribe to newsletter
          </label>
          <button
            type="submit"
            disabled={loading}
            className={`w-fit px-8 py-2 rounded-xl flex items-center justify-center m-auto transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-[#5BB35B] text-white"
            }`}
          >
            {loading ? (
              <>
                Registering...
                <svg
                  className="ml-2 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              </>
            ) : (
              <>
                Register
                <IoLogInOutline className="ml-2" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
