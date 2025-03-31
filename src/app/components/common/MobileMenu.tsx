"use client";

import Link from "next/link";
import Accordion from "./FooterAccordion";
import { IoIosMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import Image from "next/image";
import SocialMediaLinks from "./SocialMediaLinks";

export const footerTabs = [
  { id: 1, label: "Privacy Policy", path: "/privacy-policy" },
  {
    id: 2,
    label: "Terms And Conditions",
    path: "/terms-and-conditions",
  },
];

export const SidebarTabs = [
  { id: 1, label: "About", path: "/about" },
  { id: 5, label: "Contact", path: "/contact" },
  { id: 2, label: "Blog", path: "/blog" },
  { id: 6, label: "Doctor Consultation", path: "/doctor-consultation" },
  { id: 3, label: "Privacy Policy", path: "/privacy-policy" },
  {
    id: 4,
    label: "Terms And Conditions",
    path: "/terms-and-conditions",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // prevent overflow
    } else document.body.style.overflow = "scroll";
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative font-[poppins]">
      <div
        className={`fixed top-0 right-0 h-full bg-gray-900 text-primary z-50 transform ${
          isOpen ? "w-[85%] md:w-3/4" : "w-0"
        } transition-all duration-500 ease-in-out`}
      >
        <div className="bg-gray-900 text-gray-50">
          <div className="flex p-3 shadow-md z-50 justify-between items-center">
            <Link href={"/"}>
              <Image
                src={"/assets/logo/logo.png"}
                width={130}
                height={50}
                unoptimized
                priority
                alt="Above All Agency"
                className="w-2/4"
              />
            </Link>
            <p className="font-extrabold text-2xl" onClick={toggleSidebar}>
              x
            </p>
          </div>
          <div className="p-4 pb-40 bg-gray-900 overflow-auto h-screen">
            <Link
              href={"/"}
              aria-label={"Home"}
              onClick={handleLinkClick}
              className="relative text-lg font-medium inline-block py-3 border-b w-full border-white/20 cursor-pointer"
            >
              Home
            </Link>
            <Accordion
              sidebar={true}
              services={[]}
              handleLinkClick={handleLinkClick}
            />
            {SidebarTabs.map((item) => (
              <div key={item.id} className="relative group">
                <Link
                  href={item.path}
                  aria-label={item.label}
                  onClick={handleLinkClick}
                  className="relative text-lg font-medium inline-block py-3 border-b w-full border-white/20 cursor-pointer"
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <div className="py-4">
              <p className="pb-2">Follow us at:</p>
              <SocialMediaLinks size={30} />
            </div>
          </div>
        </div>
      </div>
      <IoIosMenu
        size={30}
        onClick={toggleSidebar}
        className="lg:hidden text-primary"
      />
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
