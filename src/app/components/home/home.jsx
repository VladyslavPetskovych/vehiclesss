"use client";
import React, { useState } from "react";
import useFetchVehicleMakes from "../../hooks/useFetchVehicleMakes";
import VehicleMakesDropdown from "./VehicleMakesDropdown";
import YearsDropdown from "./YearsDropdown";
import NextButton from "../buttons/nextButton";

function Home() {
  const { data, loading } = useFetchVehicleMakes();
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div>
        <h1 className="text-2xl m-5">Vehicle Makes</h1>
        <div className="flex flex-row space-x-4">
          {loading && <p>Loading ...</p>}
          {!loading && data && (
            <VehicleMakesDropdown makes={data} onMakeSelect={setSelectedMake} />
          )}
          <YearsDropdown onYearSelect={setSelectedYear} />{" "}
        </div>
      </div>

      <div className="mt-6">
        <NextButton makeId={selectedMake} year={selectedYear} />
      </div>
    </div>
  );
}

export default Home;
