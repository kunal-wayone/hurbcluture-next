"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiLogin, CiLogout } from "react-icons/ci";
import {
  IoCartOutline,
  IoClose,
  IoHeartOutline,
  IoLocation,
  IoSearch,
} from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import { useAuth } from "../../../context/AuthContext";
import ConfirmationModal from "./ConfirmationModal";

export default function HeaderBar() {
  const { token, user, logout } = useAuth();
  const [isLogout, setIsLogout] = useState(false);

  const getInitials = (name: string) => {
    const words = name.trim().split(" ");
    const first = words[0]?.[0] || "";
    const second = words[1]?.[0] || "";
    return (first + second).toUpperCase();
  };
  return (
    <div className="bg-white flex justify-between p-4 lg:px-16 shadow  items-center gap-4 absolute top-0 z-[100] w-full">
      <div className="">
        <Link href={"/"}>
          <Image
            src={"/assets/logo/logo.png"}
            width={110}
            height={40}
            unoptimized
            priority
            alt="The Herb Culture"
            className="h-16 lg:h-auto"
          />
        </Link>
      </div>

      <div className="hidden lg:flex items-end gap-x-1.5 ">
        <IoLocation className="text-2xl text-gray-800" />
        <div>
          <p className="text-secondary">Delever to Prashant</p>
          <p className="text-dark-primary">New Delhi, 110001</p>
        </div>
      </div>

      <div className="w-2/5 hidden lg:block">
        <div className="flex items-center justify-between h-11 text-secondary  border-[1px] border-gray-200 rounded-xl overflow-hidden">
          <select name="category" id="Category" className="bg-gray-200 p-4">
            <option value="All">All</option>
            {[1, 2, 3, 4, 5].map((cat: any, index: any) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input type="text" placeholder="Search" className="p-2 w-4/6" />
          <div className="w-11 h-11 flex items-center justify-center">
            <IoClose className="text-red-300 text-2xl m-auto " />
          </div>
          <div className="bg-primary w-11 h-11 flex justify-center items-center">
            <IoSearch className="text-white text-2xl font-thin" />
          </div>
        </div>
      </div>

      <div className="flex  items-center gap-4 lg:w-1/5">
        <span className="hidden lg:block">
          <IoCartOutline className="text-3xl text-primary" />
        </span>
        <span className="hidden lg:block">
          <IoHeartOutline className="text-3xl text-primary" />
        </span>
        {!token && (
          <Link
            href={"/login"}
            className="hidden lg:flex justify-center items-center bg-primary p-3 px-8 rounded-xl text-white hover:scale-105 ease-in-out transition-all duration-300"
          >
            Login <CiLogin />
          </Link>
        )}
        {!token && (
          <span className="flex lg:hidden justify-center items-center text-primary cursor-pointer  ">
            <CiLogin className="text-4xl" />
          </span>
        )}

        {token && (
          <Link
            href={"/profile"}
            className="hidden lg:flex justify-center items-center bg-primary text-xl font-semibold overflow-hidden rounded-full border border-gray-200 w-12 h-12  hover:scale-105 ease-in-out transition-all duration-300"
          >
            {/* <Image
              src="/assets/profile/dr.svg"
              alt="user"
              width={800}
              height={800}
              className="object-contain w-full h-full"
            /> */}
            {getInitials(user?.name)}
          </Link>
        )}
        {token && (
          <span
            onClick={() => setIsLogout(true)}
            className="flex justify-center items-center text-primary cursor-pointer hover:scale-105 ease-in-out transition-all duration-300"
          >
            <CiLogout className="text-3xl" />
          </span>
        )}

        <MobileMenu />
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
    </div>
  );
}
