"use client";

import { useState } from "react";
import { format } from "date-fns";
import { cn } from "../../../../../lib/utils";
import { CiClock1 } from "react-icons/ci";

const daysInMonth = (month: number, year: number) =>
  new Date(year, month + 1, 0).getDate();
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const timeSlots = [
  "9:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];

export default function CalendarTimeSlotPicker() {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 2, 15));
  const [selectedTime, setSelectedTime] = useState("13:00 - 14:00");
  const [month, setMonth] = useState(2); // March (0-based)
  const [year, ] = useState(2025);

  const days = Array.from(
    { length: daysInMonth(month, year) },
    (_, i) => i + 1
  );

  const getDayOfWeek = (day: number) => new Date(year, month, day).getDay();

  const handleDayClick = (day: number) =>
    setSelectedDate(new Date(year, month, day));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Calendar */}
      <div className="bg-gray-100 p-6 rounded-lg shadow ">
        <div className="text-left font-semibold mb-4">Select Day</div>
        <div className="flex justify-center gap-6 items-center mb-2">
          <button
            className="text-gray-400"
            onClick={() => setMonth((prev) => (prev === 0 ? 11 : prev - 1))}
          >
            {"<"}
          </button>
          <span className="text-gray-400">
            {format(new Date(year, month), "MMMM")}
          </span>
          <button
            className="text-gray-400"
            onClick={() => setMonth((prev) => (prev === 11 ? 0 : prev + 1))}
          >
            {">"}
          </button>
        </div>
        <div className="grid grid-cols-7 text-center text-sm font-medium mb-2">
          {weekDays.map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 text-center text-sm">
          {Array.from({ length: getDayOfWeek(1) }).map((_, i) => (
            <div key={`empty-${i}`}></div>
          ))}
          {days.map((day) => (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              className={cn(
                "w-8 h-9 rounded-lg outline-0 mx-auto mb-1",
                selectedDate.getDate() === day
                  ? "bg-primary text-white"
                  : "hover:bg-gray-200"
              )}
            >
              {day < 10 ? `0${day}` : day}
            </button>
          ))}
        </div>
        <div className="mt-4 flex justify-end gap-4 items-center text-sm">
          <span className="bg-primary text-white px-3 py-1 rounded">
            {format(selectedDate, "EEEE")}
          </span>
          <span className="bg-primary text-white px-3 py-1 rounded">
            {format(selectedDate, "dd/MMM/yyyy")}
          </span>
          <button className="bg-primary text-white px-3 py-1 rounded">
            Apply
          </button>
        </div>
      </div>

      {/* Time Slots */}
      <div className="bg-gray-100 p-6 rounded-lg shadow ">
        <div className="text-left font-semibold mb-4">Select Time Slot</div>
        <div className="border-l-2 pl-3 border-color-primary">
          <div className="text-gray-500 text-base font-semibold ">
            {format(selectedDate, "EEE")}
          </div>
          <div className="text-lg text-gray-500 font-semibold mb-4">
            {format(selectedDate, "dd MMM")}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedTime(slot)}
              className={cn(
                "border border-gray-100 rounded-lg p-3 text-sm text-left hover:border-color-primary",
                selectedTime === slot
                  ? "bg-primary text-white border-color-primary"
                  : "bg-white"
              )}
            >
              <div className="text-lg font-medium font-[ramabhadra] mb-2 pl-2">{slot}</div>
              <div className={`text-xs font-[ramabhadra]  pl-2 flex items-center gap-2 ${selectedTime !== slot && "text-gray-400"}`}><CiClock1 className="text-lg" /> 60 Min</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
