"use client"
import { CiEdit } from "react-icons/ci";
import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { Post } from "../../hooks/apiutils";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

const OtpVerification = ({
  email,
  // setOtpLocal,
  handleGoBack,
  // setIsModalVisible,
}: {
  email: any;
  setOtpLocal?: any;
  handleGoBack?: any;
  setIsModalVisible?: any;
}) => {
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const route = useRouter();
  // Enable the verify button when all OTP digits are filled
  useEffect(() => {
    const isOtpComplete = otp.every((digit) => digit !== "");
    setIsButtonDisabled(!isOtpComplete);
  }, [otp]);

  // Timer countdown for OTP resend
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
      //   setOtpLocal();
    }
    // eslint-disable-next-line
  }, [timer]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    // Handle case when pasting a 6-digit OTP
    if (value.length === 6 && index === 0) {
      const newOtp = value.split("").slice(0, 6);
      setOtp(newOtp);
      newOtp.forEach((digit, idx) => {
        if (inputRefs.current[idx]) {
          inputRefs.current[idx].value = digit;
        }
      });
      inputRefs.current[5].focus();
    } else if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Move focus to the next input box
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (otp[index] !== "") {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleResend = async () => {
    setTimer(30);
    setIsResendDisabled(true);
    await Post(`/api/loan-application/verify-otp`, { email });
    setOtp(Array(6).fill(""));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const otpCode = otp.join("");
    try {
      const response: any = await Post(`/api/user/login`, {
        email,
        otp: Number(otpCode),
      });

      if (response.success) {
        toast.success(response?.message);
        login(response?.data?.token, response?.data.user);
        route.push("/");
      }
    } catch (error: any) {
      toast.info(error?.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center relative">
      <span className="absolute top-2 right-2 cursor-pointer " onClick={handleGoBack}>
        <IoClose className="text-2xl" title="close" />
      </span>
      <div className="bg-white px-6 py-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-primary text-center mb-4">
          Enter OTP to verify your <br className="hidden bg:block" /> Email
          Address
        </h1>
        <p className="text-center text-sm font-semibold text-primary/70 mb-5">
          We&apos;ve sent an OTP to this email address <br />
          <span className="text-primary/70 pt-1 flex justify-center items-center font-semibold cursor-pointer">
            {email}{" "}
            <span
              onClick={handleGoBack}
              className="text-primary hover:text-primary/80 hover:underline text-xs pl-2 cursor-pointer"
            >
              <CiEdit size={18} />
            </span>
          </span>
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-6 gap-3 px-2 justify-center items-center mb-4"
        >
          {otp.map((_, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric" // Opens numeric keyboard on mobile
              maxLength={1}
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => {
                inputRefs.current[index] = el as HTMLInputElement;
              }}
              className="w-full aspect-square text-center border focus:border-2 border-primary/30 rounded-md focus:outline-none focus:border-primary/70 text-lg" // Reduced font size
            />
          ))}
        </form>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isButtonDisabled}
          className={`w-full py-2 text-white rounded-md  transition text-xl duration-200 flex items-center justify-center  ${
            isButtonDisabled
              ? "bg-[#1262A1]/30 cursor-not-allowed"
              : "bg-[#1262A1] hover:bg-[#1262A1]/80"
          }`}
        >
          {loading && (
            <svg
              className="mr-3 size-5 border-r-4 border-l-4 rounded-full animate-spin ..."
              viewBox="0 0 24 24"
            ></svg>
          )}
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
        <div className="text-center mt-2 hidden">
          {isResendDisabled ? (
            <p className="text-primary">Resend OTP in {timer}s</p>
          ) : (
            <p
              onClick={handleResend}
              className="text-primary hover:text-primary/80 hover:underline text-sm cursor-pointer"
            >
              Resend OTP
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
