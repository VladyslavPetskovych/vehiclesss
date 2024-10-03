import React from "react";

const YearsDropdown = ({ onYearSelect }) => {
  const years = [];
  for (let i = 2015; i < 2025; i++) {
    years.push(i);
  }

  return (
    <select
      name="year"
      className="p-2 text-black bg-white rounded"
      onChange={(e) => onYearSelect(e.target.value)}
    >
      <option value="">Select a Year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearsDropdown;
