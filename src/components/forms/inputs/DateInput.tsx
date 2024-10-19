"use client";

import { useEffect, useState } from "react";

// Utility function to format date to YYYY-MM-DD (required for input type="date")
const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

const DateInput = ({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const twoDaysLater = new Date(today);
    twoDaysLater.setDate(today.getDate() + 2);

    const twoWeeksLater = new Date(today);
    twoWeeksLater.setDate(today.getDate() + 30);

    // Set initial min and max dates to ensure weekdays only
    const validMinDate = getNextValidWeekday(twoDaysLater);
    const validMaxDate = getNextValidWeekday(twoWeeksLater, true);

    setMinDate(formatDate(validMinDate));
    setMaxDate(formatDate(validMaxDate));
  }, []);

  // Function to get the next valid weekday (skip weekends)
  const getNextValidWeekday = (date: Date, moveBackIfWeekend = false) => {
    const day = date.getDay();
    if (day === 6) {
      // Saturday, move to Monday
      date.setDate(date.getDate() + (moveBackIfWeekend ? -1 : 2));
    } else if (day === 0) {
      // Sunday, move to Monday
      date.setDate(date.getDate() + (moveBackIfWeekend ? -2 : 1));
    }
    return date;
  };

  return (
    <div>
      <label htmlFor="date" className="block text-m text-white text-left">
        Preferred Date
      </label>
      <input
        type="date"
        id="date"
        name="date"
        min={minDate}
        max={maxDate}
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 bg-white"
        onChange={onChange}
        required
      />
    </div>
  );
};

export default DateInput;
