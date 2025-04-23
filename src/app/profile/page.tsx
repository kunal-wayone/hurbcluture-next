"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import dayjs from "dayjs";
import ConfirmationModal from "../components/common/ConfirmationModal";
import { Put } from "../../hooks/apiutils";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const [loadingSection, setLoadingSection] = useState<string | null>(null);
  const [isLogout, setIsLogout] = useState(false);
  const [userData, ] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const {  logout } = useAuth();

  const [editState, setEditState] = useState({
    personal: false,
    contact: false,
    account: false,
  });

  const [formData, setFormData] = useState({
    personal: {
      name: userData?.name ?? "NA",
      gender: userData?.gender ?? "NA",
      dateOfBirth: dayjs(userData?.dateOfBirth).format("DD/MMMM/YYYY") ?? "NA",
      language: userData?.language ?? "NA",
      address: userData?.address ?? "NA",
    },
    contact: {
      email: userData?.email ?? "NA",
      phone: userData?.phone ?? "NA",
    },
    account: {
      currentPassword: "",
      newPassword: "",
    },
  });

  const handleChange = (
    section: keyof typeof formData,
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleEdit = (section: keyof typeof editState) => {
    setEditState({ ...editState, [section]: true });
  };

  const handleSave = async (section: keyof typeof editState, data?: any) => {
    setLoadingSection(section);
    console.log(formData);
    try {
      // Replace with your actual API call
      const res: any = await Put(`/api/user`, data, 5000);

      if (res.success) {
        toast.success(`${section} updated successfully.`);
        setEditState({ ...editState, [section]: false });
      } else {
        toast.error(res?.message || `Failed to update ${section}.`);
      }
    } catch (error: any) {
      console.error(`Error updating ${section}:`, error);
      toast.error(
        error?.message || `Something went wrong while saving ${section}.`
      );
    } finally {
      setLoadingSection(null);
    }
  };

  const renderRow = (
    label: string,
    value: string,
    isEditing: boolean,
    onChange?: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void,
    type: string = "text"
  ) => (
    <div className="flex justify-between items-start py-1 mb-2">
      <label className="text-gray-800 font-semibold w-1/3">{label}</label>
      {isEditing ? (
        type === "textarea" ? (
          <textarea
            className="input w-2/3 border rounded px-2 py-1"
            value={value}
            onChange={onChange}
          />
        ) : (
          <input
            className="input w-2/3 border rounded px-2 py-1"
            type={type}
            value={value}
            onChange={onChange}
          />
        )
      ) : (
        <p className="text-gray-500 font-medium w-2/3">{value}</p>
      )}
    </div>
  );

  return (
    <div className="mt-[9.6rem] bg-white text-dark-primary">
      <div className="max-w-7xl mx-auto p-4 lg:p-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          My Profile
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personal Info */}
          <div className=" ">
            <div className="flex justify-start gap-4 items-center mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Personal Info
              </h3>
              {!editState.personal && (
                <BiEdit
                  onClick={() => handleEdit("personal")}
                  className="cursor-pointer text-gray-500"
                />
              )}
            </div>
            {renderRow(
              "Name",
              formData.personal.name,
              editState.personal,
              (e) => handleChange("personal", "name", e.target.value)
            )}
            {renderRow(
              "Gender",
              formData.personal.gender,
              editState.personal,
              (e) => handleChange("personal", "gender", e.target.value)
            )}
            {renderRow(
              "Date of Birth",
              formData.personal.dateOfBirth
                ? dayjs(formData.personal.dateOfBirth).format("YYYY-MM-DD")
                : "",
              editState.personal,
              (e) =>
                handleChange(
                  "personal",
                  "dateOfBirth",
                  dayjs(e.target.value).toISOString()
                ),
              "date"
            )}

            {editState.personal && (
              <button
                onClick={() => handleSave("personal", formData?.personal)}
                className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-primary-dark"
                disabled={loadingSection === "personal"}
              >
                {loadingSection === "personal" ? "Saving..." : "Save"}
              </button>
            )}
          </div>

          {/* Contact Info */}
          <div className=" ">
            <div className="flex justify-start gap-4 items-center mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Contact Info
              </h3>
              {!editState.contact && (
                <BiEdit
                  onClick={() => handleEdit("contact")}
                  className="cursor-pointer text-gray-500"
                />
              )}
            </div>
            {renderRow(
              "Email",
              formData.contact.email,
              editState.contact,
              (e) => handleChange("contact", "email", e.target.value)
            )}
            {renderRow(
              "Phone",
              formData.contact.phone,
              editState.contact,
              (e) => handleChange("contact", "phone", e.target.value)
            )}

            {editState.contact && (
              <button
                onClick={() => handleSave("contact", formData?.contact)}
                className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-primary-dark"
                disabled={loadingSection === "contact"}
              >
                {loadingSection === "contact" ? "Saving..." : "Save"}
              </button>
            )}
          </div>

          {/* Account Info */}
          <div className=" ">
            <div className="flex justify-start gap-4 items-center mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Account Info
              </h3>

              {/* {!editState.account && (
                <BiEdit
                  onClick={() => handleEdit("account")}
                  className="cursor-pointer"
                />
              )} */}
            </div>
            <div className="space-y-4">
              <Link
                href={""}
                className="text-base flex items-center gap-2 font-semibold text-gray-800"
              >
                Forgot Password <FaArrowRight className="h-3" />
              </Link>
              <Link
                href={""}
                className="text-base flex items-center gap-2 font-semibold text-gray-800"
              >
                Change Password <FaArrowRight className="h-3" />
              </Link>
              <span
                onClick={() => setIsLogout(true)}
                className="text-base flex items-center gap-2 font-semibold text-red-500 hover:text-red-600 cursor-pointer active:scale-[0.98] ease-in-out transition-all duration-300 "
              >
                Log Out <FaArrowRight className="h-3" />
              </span>
            </div>
            {/* {renderRow(
              "Current Password",
              formData.account.currentPassword,
              editState.account,
              (e) => handleChange("account", "currentPassword", e.target.value),
              "password"
            )}
            {renderRow(
              "New Password",
              formData.account.newPassword,
              editState.account,
              (e) => handleChange("account", "newPassword", e.target.value),
              "password"
            )} */}

            {/* {editState.account && (
              <button
                onClick={() => handleSave("account",formData?.account)}
                className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-primary-dark"
                disabled={loadingSection === "account"}
              >
                {loadingSection === "account" ? "Saving..." : "Save"}
              </button>
            )} */}
          </div>
        </div>
      </div>

      <ConfirmationModal
        open={isLogout}
        onClose={() => setIsLogout(false)}
        title="Logout Confirmation"
        message="Are you sure you want to logout?"
        onConfirm={logout}
        confirmLabel="Yes, Log Out"
        cancelLabel="Cancel"
      />
    </div>
  );
};

export default ProfilePage;
