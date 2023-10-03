import { useState } from "react";
import ShadowList from "./ShadowList/ShadowList";
import BoxPanel from "./BoxPanel/BoxPanel";

import React from "react";

export default function LeftContainer() {
  const [tab, setTabs] = useState(0);

  const tabList = [
    { name: "shadow", component:<ShadowList/> },
    { name: "boxPanel", component:<BoxPanel/> },

];

  return (
    <div className="relative mt-20 w-[600px] h-[550px] border rounded-b rounded-tr border-gray-300 shadow-xl bg-gray-50 md:mt-0"></div>
  );
}
