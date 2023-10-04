import React from "react";

export default function BoxRange({ inputData }) {
  return (
    <div className="my-8">
      <div className="flex justify-between">
        {/* Destructuring */}
        <p>{inputData.name}</p>

        <div className="flex items-baseline mb-2">
          <input
            className="w-14 h-8 mr-2 border-gray-200 text-center"
            type="number"
          />
          <p>px</p>
        </div>
     
      </div>

      <div className="relative z-0 w-full flex items-center">
          <input type="range"
          min={inputData.minMax[0]}
          max={inputData.minMax[1]}
          
          
          />
        </div> 
    </div>
  );
}
