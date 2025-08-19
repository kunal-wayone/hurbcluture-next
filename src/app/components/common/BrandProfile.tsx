'use client';

import React from 'react';
import Image from 'next/image';
import { HiGlobeAlt, HiCalendar } from 'react-icons/hi';
import Link from 'next/link';

const brandData = {
    id: 6,
    name: 'Akeem Justice',
    slug: 'akeem-justice',
    logo: null,
    tagline: 'Fugit atque id dese',
    description:
        'Nulla amet accusant Nulla amet accusant Nulla amet accusant Nulla amet accusant Nulla amet accusant Nulla amet accusant Nulla amet accusant Nulla amet accusant Nulla amet accusant Nulla amet accusant Nulla amet accusant Nulla amet accusant Nulla amet accusant Nulla amet accusant',
    foundedYear: 2010,
    originCountry: 'Cum illo est est qua',
    websiteUrl: 'https://www.lycico.org.au',
    systemGenerated: false,
    createdAt: '2025-08-03T19:21:39.204Z',
    deletedAt: null,
};

export default function BrandProfile() {
    return (
        <div className="max-w-7xl mx-auto px-16 py-10 bg-white  rounded-xl">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Logo / Initial */}
                <div className="w-32 h-32 bg-blue-100 text-primary rounded-full flex items-center justify-center text-4xl font-extrabold shadow-inner">
                    {brandData.logo ? (
                        <Image
                            src={brandData.logo}
                            alt={brandData.name}
                            width={128}
                            height={128}
                            className="rounded-full object-cover"
                        />
                    ) : (
                        brandData.name.charAt(0)
                    )}
                </div>

                {/* Brand Info */}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900">{brandData.name}</h1>
                    <p className="text-primary italic mt-1">{brandData.tagline}</p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                            <HiCalendar className="text-primary" />
                            <strong className="font-medium">Founded:</strong> {brandData.foundedYear}
                        </span>
                        <span className="flex items-center gap-1">
                            <HiGlobeAlt className="text-primary" />
                            <strong className="font-medium">Country:</strong> {brandData.originCountry}
                        </span>
                    </div>
                </div>
                {/* Website Link */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Official Website</h2>
                    <Link
                        href={brandData.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-primary hover:text-primary transition duration-200 hover:underline"
                    >
                        {brandData.websiteUrl}
                    </Link>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-8 border-gray-200" />



            {/* Description */}
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">About the Brand</h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {brandData.description}
                </p>
            </div>
        </div>
    );
}
