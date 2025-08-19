"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoLogInOutline } from "react-icons/io5";
import { BASE_URL, Fetch, Post } from "../../../hooks/apiutils";
import { differenceInYears } from "date-fns";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

// Interface for form data
interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  secondaryPhone?: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "Other";
  password: string;
  accountType: "Medical" | "Recreational";
  confirmPassword: string;
  termsAccepted: boolean;
  newsletterSubscription: boolean;
  ageVerificationDocument: string;
  ageVerificationDocumentFile: FileList;
  privacyPolicyAccepted: boolean;
}

// Yup validation schema
const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number")
    .required("Phone number is required"),
  secondaryPhone: yup.string().optional().nullable(),
  accountType: yup
    .string()
    .required("Account type is required")
    .oneOf(["Medical", "Recreational"], "Invalid account type"),
  dateOfBirth: yup
    .string()
    .required("Date of birth is required")
    .test("age", "Invalid age", (value, context) => {
      if (!value) return false;
      const minAge = context.parent.accountType === "Medical" ? 18 : 21;
      return differenceInYears(new Date(), new Date(value)) >= minAge;
    }),
  gender: yup
    .string()
    .oneOf(["Male", "Female", "Other"], "Gender is required")
    .required("Gender is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
  termsAccepted: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
  privacyPolicyAccepted: yup
    .boolean()
    .oneOf([true], "You must accept the privacy policy"),
  newsletterSubscription: yup.boolean(),
  ageVerificationDocument: yup
    .string()
    .required("Age verification document is required"),
  ageVerificationDocumentFile: yup
    .mixed<FileList>()
    .test("fileRequired", "Age verification document is required", (value) => {
      return value && value.length > 0;
    }),
});

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAndConditionsId, setTermsAndConditionsId] = useState("");
  const [privacyPolicyId, setPrivacyPolicyId] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<any>({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    const getPolicies = async () => {
      try {
        const [termsRes, privacyRes]: any = await Promise.all([
          Fetch("/api/terms-and-conditions?limit=1", {}, 5000),
          Fetch("/api/privacy-policy?limit=1", {}, 5000)
        ]);

        if (!termsRes?.success || !privacyRes?.success) {
          throw new Error("Failed to fetch policy documents");
        }

        setTermsAndConditionsId(termsRes?.data?.result?.[0]?.id || "");
        setPrivacyPolicyId(privacyRes?.data?.result?.[0]?.id || "");
      } catch (error) {
        console.log(error)
        toast.error("Failed to load policy documents.");
      }
    };

    getPolicies();
  }, []);


  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("phoneNumber", data.phone);
      if (data.secondaryPhone) {
        formData.append("secondaryPhone", data.secondaryPhone);
      }
      formData.append("dateOfBirth", data.dateOfBirth);
      formData.append("passwordHash", data.password); // TODO: Hash password server-side
      formData.append("accountType", data.accountType);
      formData.append("gender", data.gender);
      formData.append("termsAndConditionsId", termsAndConditionsId);
      formData.append("termsAccepted", data.termsAccepted.toString());
      formData.append("privacyPolicyId", privacyPolicyId);
      formData.append("privacyPolicyAccepted", data.privacyPolicyAccepted.toString());
      formData.append("twoFactorAuth", "false");
      formData.append("ageVerificationDocument", data.ageVerificationDocument);
      formData.append("newsletterSubscription", data.newsletterSubscription.toString());

      if (data.ageVerificationDocumentFile[0]) {
        formData.append("ageVerificationDocumentFile", data.ageVerificationDocumentFile[0]);
      }

      const response: any = await Post("/api/customer", formData, 5000);
      if (response.success) {
        toast.success("Registration successful. Please check your email.");
        reset()
        router.push("/auth/login");
      } else {
        toast.error(response.message || "Registration failed.");
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url("/assets/banner/loginbanner1.png")' }}
    >
      <div className="p-8 w-full max-w-lg text-center space-y-6">
        <img src="/assets/logo/logo.png" alt="Logo" className="mx-auto h-12" />
        <h2 className="text-2xl font-bold text-gray-800">Register</h2>
        <p className="text-sm text-gray-500">Enter your personal information</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName")}
                className="w-full px-4 py-2 border rounded-xl"
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
                className="w-full px-4 py-2 border rounded-xl"
              />
              {errors.lastName && (
                <p className="text-red-600 text-sm">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full px-4 py-2 border rounded-xl"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Phone Number"
              {...register("phone")}
              className="w-full px-4 py-2 border rounded-xl"
            />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Secondary Phone (optional)"
              {...register("secondaryPhone")}
              className="w-full px-4 py-2 border rounded-xl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Recreational"
                  {...register("accountType")}
                  className="form-radio text-blue-600"
                />
                <span>Recreational</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Medical"
                  {...register("accountType")}
                  className="form-radio text-blue-600"
                />
                <span>Medical</span>
              </label>
            </div>
            {errors.accountType && (
              <p className="text-red-600 text-sm mt-1">{errors.accountType.message}</p>
            )}
          </div>

          <div>
            <input
              type="date"
              {...register("dateOfBirth")}
              className="w-full px-4 py-2 border rounded-xl"
            />
            {errors.dateOfBirth && (
              <p className="text-red-600 text-sm">{errors.dateOfBirth.message}</p>
            )}
          </div>

          <div>
            <select
              {...register("gender")}
              className="w-full px-4 py-2 border rounded-xl"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-600 text-sm">{errors.gender.message}</p>}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
              className="w-full px-4 py-2 pr-10 border rounded-xl"
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className="w-full px-4 py-2 pr-10 border rounded-xl"
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.confirmPassword && (
              <p className="text-red-600 text-sm">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age Verification Document
            </label>
            <select
              {...register("ageVerificationDocument")}
              className="w-full px-4 py-2 border rounded-xl"
            >
              <option value="">Select document</option>
              {["Pan Card", "Aadhaar Card", "Voter Card", "Driving License", "Passport"].map(
                (data, index) => (
                  <option key={index} value={data}>
                    {data}
                  </option>
                ),
              )}
            </select>
            {errors.ageVerificationDocument && (
              <p className="text-red-600 text-sm">{errors.ageVerificationDocument.message}</p>
            )}
          </div>

          <div>
            <input
              type="file"
              accept=".pdf,image/*"
              {...register("ageVerificationDocumentFile")}
              className="w-full px-4 py-2 border rounded-xl"
            />
            {errors.ageVerificationDocumentFile && (
              <p className="text-red-600 text-sm">{errors.ageVerificationDocumentFile.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" {...register("termsAccepted")} />
              I agree to the{" "}
              <Link
                className="text-blue-600 underline"
                target="_blank"
                href={`${BASE_URL}/api/terms-and-conditions`}
              >
                terms and conditions
              </Link>
            </label>
            {errors.termsAccepted && (
              <p className="text-red-600 text-sm">{errors.termsAccepted.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" {...register("privacyPolicyAccepted")} />
              I agree to the{" "}
              <Link
                className="text-blue-600 underline"
                target="_blank"
                href={`${BASE_URL}/api/privacy-policy`}
              >
                privacy policy
              </Link>
            </label>
            {errors.privacyPolicyAccepted && (
              <p className="text-red-600 text-sm">{errors.privacyPolicyAccepted.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" {...register("newsletterSubscription")} />
              Subscribe to newsletter
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-xl flex items-center justify-center transition ${loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700 text-white"
              }`}
          >
            {loading ? (
              "Registering..."
            ) : (
              <>
                Register <IoLogInOutline className="ml-2" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}