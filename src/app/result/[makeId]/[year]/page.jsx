import React from "react";

export default function VehicleResultPage({ params }) {
  const { makeId, year } = params;

  return (
    <div>
      <h1>
        Results for Vehicle with makeID: {makeId} and Year: {year}
      </h1>
    </div>
  );
}

export async function generateStaticParams() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const vehicleMakes = await fetch(
    `${apiUrl}/vehicles/GetMakesForVehicleType/car?format=json`
  ).then((res) => res.json());

  const years = [2015, 2016, 2017, 2018, 2019, 2020];

  const paths = vehicleMakes.Results.flatMap((make) => {
    return years.map((year) => ({
      makeId: make.MakeId.toString(),
      year: year.toString(),
    }));
  });

  return paths;
}
