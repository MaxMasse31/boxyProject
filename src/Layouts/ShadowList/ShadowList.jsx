import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addShadow } from "../../features/shadow";

export default function ShadowList() {
  return (
    <div>
      <div className="flex justify-between p-6 border-b border-grey-300"> 
      
      <p className="font-bold text-lg"> Customize Shadow</p>

      <button 
      className="py-1 px-3 text-sm rounded bg-blue-600 focus:outline-none focus:ring-4 focus-ring-offset-2 hover:bg-blue-700 text-white"
      > Add Shadow </button>
      
      </div>
    </div>
  );
}
