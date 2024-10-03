"use client";
import React from 'react';
import Link from 'next/link';

const NextButton = ({ makeId, year }) => {
  return (
    <div>
      {makeId && year ? (
        <Link href={`/result/${makeId}/${year}`}>
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Next
          </button>
        </Link>
      ) : (
        <button className="p-2 bg-gray-500 text-white rounded" disabled>
          Select Make and Year
        </button>
      )}
    </div>
  );
};

export default NextButton;
