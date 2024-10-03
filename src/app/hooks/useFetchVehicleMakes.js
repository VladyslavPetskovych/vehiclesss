"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchVehicleMakes = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchVehicleMakes = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/vehicles/GetMakesForVehicleType/car?format=json`
        );
        setData(response.data.Results);
        console.log("Fetched Data:", response.data.Results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicleMakes();
  }, []);

  return { data, loading };
};

export default useFetchVehicleMakes;
