import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLogin } from "react-icons/ci";
import {
  IoCartOutline,
  IoClose,
  IoHeartOutline,
  IoLocation,
  IoSearch,
} from "react-icons/io5";
import MobileMenu from "./MobileMenu";

export default function HeaderBar() {
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
            alt="Above All Agency"
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
        <span className="hidden lg:flex justify-center items-center bg-primary p-3 px-8 rounded-xl text-white">
          Login <CiLogin />
        </span>
        <span className="flex lg:hidden justify-center items-center text-primary  ">
          <CiLogin className="text-4xl" />
        </span>
        <MobileMenu />
      </div>
    </div>
  );
}
