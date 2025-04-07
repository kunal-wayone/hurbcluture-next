"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { BiCategoryAlt, BiSolidOffer } from "react-icons/bi";

const Navbar = () => {
  const pathname = usePathname(); // Get current route
  const [activeSubmenuId, setActiveSubmenuId] = useState<string | null>(null); // Track active submenu by ID

  const handleMouseEnter = (submenuId: string) => {
    setActiveSubmenuId(submenuId); // Set the submenu as active on hover
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveSubmenuId(null); // Reset the active submenu when mouse leaves
    }, 500);
  };

  const handleClick = (submenuId: string) => {
    // Toggle submenu visibility on click (open if closed, close if already open)
    setActiveSubmenuId((prev) => (prev === submenuId ? null : submenuId));
  };

  // Define menuItems with submenus for "Services" and "Industries"
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Contact",
      path: "/contact",
      submenu: [],
    },
    { name: "Blog", path: "/blog" },
    {
      name: "Doctor Consultation",
      path: "/doctor-consultation",
    },
  ];

  const handleLinkClick = () => setActiveSubmenuId(null);

  return (
    <nav className="bg-white font-[raleway] flex justify-between pt-5 p-3 lg:px-16 lg:justify-between items-center absolute top-20 z-[99] w-full">
      <div className=" flex justify-center items-center">
        <BiCategoryAlt className="text-3xl text-dark-primary" />
        <select
          name="category"
          id="Category"
          className=" w-full font-[raleway] text-dark-primary outline-0"
        >
          <option value="All">All Categories</option>
          {[1, 2, 3, 4, 5].map((cat: any, index: any) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <span className="h-6 ml-10 w-[1px] inline-block bg-gray-200"></span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden max-w-6xl lg:flex justify-start items-center w-3/5 text-dark-primary">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(item.name)} // Hover behavior
          >
            <Link href={item.path} className="border-none outline-none">
              <li
                className={`mr-10 text-sm font-[raleway] ${
                  pathname === item.path
                    ? "text-primary"
                    : "text-dark-primary hover:text-gray-100 transition duration-200"
                }`}
                onClick={(e) => {
                  if (item?.submenu) e.preventDefault(); // Prevent link navigation to enable click behavior
                  handleClick(item.name); // Toggle submenu on click
                }}
              >
                {item.name}
              </li>
            </Link>

            {/* Submenu */}
            {item?.submenu && (
              <div
                className={`absolute top-20 left-[-20rem] w-[60vw] mt-2 rounded-2xl bg-gray-50 text-dark-primary ${
                  activeSubmenuId === item.name ? "block" : "hidden"
                }`}
                onMouseLeave={handleMouseLeave} // Reset on mouse leave
              >
                <ul className="space-y-2 p-2 grid grid-cols-1 lg:grid-cols-3">
                  {item?.submenu.map((subItem: any) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.path}
                        onClick={handleLinkClick}
                        className="px-4 py-2 text-sm text-dark-primary font-[raleway] rounded-xl hover:bg-gray-200 flex justify-start items-center gap-4"
                      >
                        <span className="text-3xl rounded-full p-3 group-hover:bg-white">
                          <Image
                            src={subItem?.image}
                            width={50}
                            height={50}
                            alt="Icon"
                            className="w-7 h-7 filter invert"
                          />
                        </span>
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </ul>

      <div>
        <Link
          href={"/"}
          className="border border-gray-50 px-5 py-2 text-dark-primary flex justify-center items-center"
        >
          <BiSolidOffer className="text-primary" />
          Up To 60% off
          <span className="text-primary hidden lg:block ml-2">All Items</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
