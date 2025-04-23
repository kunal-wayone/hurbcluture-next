import React from "react";
import { IoIosVideocam } from "react-icons/io";

export default function Session() {
  return (
    <div className="bg-gray-100 rounded-2xl p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {"Your Sessions"}
      </h2>
      <div className="flex items-center justify-between gap-4 p-4">
        <button className="bg-primary hover:bg-primary/90 transition w-full lg:w-1/2 text-white px-8 py-3 rounded-xl text-sm font-medium">
          Upcoming
        </button>
        <button className="bg-primary hover:bg-primary/90 transition w-full lg:w-1/2 text-white px-8 py-3 rounded-xl text-sm font-medium">
          Scheduled
        </button>
      </div>
      <div>
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 p-4 border-b border-gray-200 mb-2"
            >
              <div className="text-xl font-semibold lg:w-1/5 border-r flex items-center border-gray-200">
                18 Mar, Thu
              </div>
              <div className="text-xl font-semibold text-gray-400 flex items-center justify-start w-3/5">
                10:00 AM - 11:00 AM
                <br />
                60 Min
              </div>
              <div className="flex items-center justify-center w-1/5">
                <IoIosVideocam className="text-primary text-2xl drop-shadow-[0_10px_10px_rgba(134,239,172,1)]" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
