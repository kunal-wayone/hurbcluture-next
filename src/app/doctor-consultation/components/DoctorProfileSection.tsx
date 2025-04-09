"use client";

import React from "react";
import DoctorProfileCard from "./DoctorProfileCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const doctors = [
  {
    image: "/assets/profile/dr.svg",
    name: "Dr. Aarti Sharma",
    experience: "10 years",
    specialty: "Dermatologist",
    degree: "MBBS, MD",
    rating: 4,
    price: "900",
    timing: "1 Session x 60 Min",
  },
  {
    image: "/assets/profile/dr.svg",
    name: "Dr. Rohan Mehta",
    experience: "7 years",
    specialty: "Cardiologist",
    degree: "MBBS, DM",
    rating: 4.5,
    price: "1200",
    timing: "1 Session x 45 Min",
  },
  {
    image: "/assets/profile/dr.svg",
    name: "Dr. Sneha Iyer",
    experience: "5 years",
    specialty: "Psychiatrist",
    degree: "MBBS, MD",
    rating: 5,
    price: "800",
    timing: "1 Session x 30 Min",
  },
  {
    image: "/assets/profile/dr.svg",
    name: "Dr. Sneha Iyer",
    experience: "5 years",
    specialty: "Psychiatrist",
    degree: "MBBS, MD",
    rating: 5,
    price: "800",
    timing: "1 Session x 30 Min",
  },
  {
    image: "/assets/profile/dr.svg",
    name: "Dr. Sneha Iyer",
    experience: "5 years",
    specialty: "Psychiatrist",
    degree: "MBBS, MD",
    rating: 5,
    price: "800",
    timing: "1 Session x 30 Min",
  },
  {
    image: "/assets/profile/dr.svg",
    name: "Dr. Sneha Iyer",
    experience: "5 years",
    specialty: "Psychiatrist",
    degree: "MBBS, MD",
    rating: 5,
    price: "800",
    timing: "1 Session x 30 Min",
  },
];

export default function DoctorProfileSection({
  title = "Doctors Profile",
}: {
  title?: string;
}) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={false}
        navigation={false}
        modules={[Navigation, Pagination]}
      >
        {doctors.map((doc, index) => (
          <SwiperSlide key={index}>
            <DoctorProfileCard
              image={doc.image}
              name={doc.name}
              experience={doc.experience}
              specialty={doc.specialty}
              degree={doc.degree}
              rating={doc.rating}
              price={doc.price}
              timing={doc.timing}
              onBook={() => alert(`Booking session with ${doc.name}`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
