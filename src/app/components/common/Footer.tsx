import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const services = [
    {
      name: "Hemp Cigarette",
      image: "/assets/webdev.png",
      path: "/services/web-development",
      id: "web-development", // Unique ID for submenu
    },
    {
      name: "Hemp Hair Oil",
      image: "/assets/appdev.png",
      path: "/services/app-development",
      id: "app-development", // Unique ID for submenu
    },
    {
      name: "Hemp Seed Oil",
      image: "/assets/appdev.png",
      path: "/services/app-development",
      id: "app-development", // Unique ID for submenu
    },
  ];

  const company = [
    { name: "About", url: "/about-us" },
    { name: "Contact Us", url: "/contact-us" },
    // { name: "Careers", url: "/careers" },
    // { name: "Culture", url: "/culture" },
    { name: "Blog", url: "/blog" },
  ];

  const support = [
    { name: "Getting started", url: "/" },
    { name: "Help center", url: "/" },
    { name: "Server status", url: "/" },
    { name: "Report a bug", url: "/" },
    { name: "Chat support", url: "/" },
  ];

  return (
    <footer className="text-gray-50 font-[raleway] bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 lg:py-8 mb-10 lg:mb-0">
          <h2 className="text-dark-primary text-2xl font-medium font-[ramabhadra] mb-4 lg:mb-0">
            Subscribe to our newsletter & get 20 % off
          </h2>
          <div className="flex items-center gap-4 w-full lg:w-2/5">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg p-2.5 px-4 w-4/5 border-[1.5px] text-sm text-gray-800 border-gray-300 outline-0"
            />
            <button className="text-gray-50 bg-primary p-2 px-10">
              Subscribe
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4 mx-auto px-4 lg:p-16 lg:pt-8 mb-6 lg:mb-0">
          <div className="w-full lg:col-span-3">
            <div className="mb-4">
              <Image
                src="/assets/logo/logo.png"
                width={200}
                height={70}
                alt="The Herb Culture"
                className="w-40 h-18"
              />
            </div>
            <div>
              <p className="font-[raleway] text-gray-500 tracking-wide text-sm/7 mt-4 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                itaque repellat perspiciatis voluptate eius nihil ea deleniti,
                hic similique accusamus laborum quidem totam unde quaerat error
                quos veritatis minima a.
              </p>
              <p className="flex items-center gap-4 ">
                <Link
                  href={
                    "https://www.facebook.com/"
                  }
                  title="facebook"
                >
                  <FaDiscord className="text-3xl text-gray-500" />
                </Link>
                <Link
                  href={
                    "https://www.facebook.com/"
                  }
                  title="facebook"
                >
                  <FaInstagram className="text-3xl text-gray-500" />
                </Link>
                <Link
                  href={
                    "https://www.facebook.com/"
                  }
                  title="facebook"
                >
                  <FaFacebook className="text-3xl text-gray-500" />
                </Link>
                <Link
                  href={"https://www.instagram.com/"}
                  title="instagram"
                >
                  <CiTwitter className="text-3xl text-gray-500" />
                </Link>
              </p>
            </div>
          </div>
          <span className="hidden lg:block"></span>
          <span className="hidden lg:block"></span>
          <div>
            <h3 className="mb-5 text-lg uppercase text-gray-800 font-semibold">
              Shop
            </h3>
            <ul className="text-sm text-gray-800 space-y-3.5">
              {services &&
                services?.map((item, index) => (
                  <li key={index}>
                    <Link href={item.path} className="text-gray-800 font-medium hover:text-gray-900">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="text-gray-800">
            <h3 className="mb-5 text-lg uppercase font-semibold">Company</h3>
            <ul className="text-sm text-gray-800 space-y-3.5  ">
              {company &&
                company?.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className="text-gray-800 font-medium hover:text-gray-900">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg uppercase text-gray-800 font-semibold">
              Support
            </h3>
            <ul className="text-sm text-gray-800 space-y-3.5">
              {support &&
                support?.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} className="text-gray-800 font-medium hover:text-gray-900">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 bg-primary p-4 lg:px-16">
          <div className="text-gray-50">
            {/* © {new Date().getFullYear()}  */}
            All rights reserved.
          </div>
          <div className="flex space-x-4 text-base mt-2 md:mt-0">
            <Link
              href="/terms-and-conditions"
              className="text-gray-50 hover:underline"
            >
              Terms & Conditions
            </Link>
            <span className="hidden md:block">|</span>
            <Link
              href="/privacy-policy"
              className="text-gray-50 hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
