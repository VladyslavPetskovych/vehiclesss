"use client";
import React from "react";

const VehicleMakesDropdown = ({ makes, onMakeSelect }) => {
  return (
    <select
      className="p-2 text-black bg-white rounded"
      onChange={(e) => onMakeSelect(e.target.value)} 
    >
      <option value="">Select a Vehicle Make</option>
      {makes.map((make) => (
        <option key={make.MakeId} value={make.MakeId}>
          {make.MakeName}
        </option>
      ))}
    </select>
  );
};

export default VehicleMakesDropdown;
