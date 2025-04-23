"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoLogInOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { Post } from "../../hooks/apiutils";
import OtpVerification from "../components/OtpVerification";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginFormData>();
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState<any>(false);
  const onSubmit = async (data: LoginFormData) => {
    try {
      const res: any = await Post("/api/user/send-otp", data, 5000);
      if (res.success) {
        setIsModalVisible(true);
        toast.success(
          "Otp sended successfully. Please check your email for the verification code."
        );
      }
      // if (res.success) {
      //   login(res?.token, res?.user);
      //   route.push("/");
      //   console.log(res);
      //   toast.success(
      //     "Login successful. Please check your email for the verification code."
      //   );
      //   console.log("Login successful");
      // }
    } catch (error: any) {
      console.error("Error during sending otp:", error);
      toast.error(error?.message || "Something went wrong during otp sending.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen mt-[9.6rem] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url("/assets/banner/loginbanner1.png")' }}
    >
      <div className="p-8 rounded-2xl w-full max-w-md text-center space-y-6">
        {/* Logo */}
        <img src="/assets/logo/logo.png" alt="Logo" className="mx-auto h-12" />

        {/* Title & Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          <p className="text-sm text-gray-500 mt-1">
            Please enter your details
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          <div>
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
              className="w-full px-4 py-2 border rounded-xl border-[#5BB35B] focus:outline-none focus:ring-2 focus:ring-[#5BB35B]"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-2 border border-[#5BB35B] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5BB35B]"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
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
                OTP Sending...
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
                Send Otp
                <IoLogInOutline className="ml-2" />
              </>
            )}
          </button>
        </form>

        {isModalVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-[5000] bg-black/30 bg-opacity-50">
            <div className="bg-white text-[#1262A1] p-6 rounded-lg text-center">
              <OtpVerification
                email={getValues("email")}
                setOtpLocal={""}
                setIsModalVisible={setIsModalVisible}
                handleGoBack={() => setIsModalVisible(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
