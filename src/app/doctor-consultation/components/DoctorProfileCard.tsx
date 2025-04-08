"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";

interface DoctorProfileProps {
  image: string;
  name: string;
  experience: string;
  specialty: string;
  degree: string;
  rating: number;
  price: string;
  timing: string;
  onBook: () => void;
}

const DoctorProfileCard: React.FC<DoctorProfileProps> = ({
  image,
  name,
  experience,
  specialty,
  degree,
  rating,
  price,
  timing,
  onBook,
}) => {
  return (
    <div className="border border-gray-200 shadow-md rounded-2xl p-4 w-full max-w-sm bg-gray-100 flex flex-col gap-2">
      {/* Top Section: Image + Info */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Doctor Image */}
        <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={112}
            height={112}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Doctor Info */}
        <div className="flex flex-col justify-center text-center md:text-left gap-1 w-full">
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <p className="text-base text-gray-500 flex items-center gap-2"><IoMdBriefcase /> {experience}</p>
          <p className="text-base text-gray-500"> {specialty}</p>
          <p className="text-base text-gray-500"> {degree}</p>
          <div className="flex justify-center md:justify-start items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-base ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            
          </div>
        </div>
      </div>

      {/* Bottom Section: Price + Booking */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-4 gap-4">
        <div className="text-center md:text-left">
          <p className="text-base font-semibold text-gray-800"> {timing}</p>
          <p className="text-2xl font-semibold text-gray-400">₹ {price}</p>
        </div>
        <button
          onClick={onBook}
          className="bg-primary hover:bg-primary/90 transition text-white px-8 py-4 rounded-xl text-sm font-medium"
        >
          Book a Session
        </button>
      </div>
    </div>
  );
};

export default DoctorProfileCard;
