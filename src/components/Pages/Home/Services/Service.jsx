import React from "react";
import MeteorsDemo from "./CardCom";

export function Service() {
  return (
    <div className="w-full flex flex-col pt-16 pb-16 border-b-2 border-sky-400" id="service">
      <h1 className="text-6xl font-bold pt-0 pb-4 gradient">SERVICES</h1>
      <p className="text-xl pt-0 pb-8 w-1/2 text-slate-700">
        Launch or redesign your website with my talent and expertise in digital
        branding.
      </p>
      <MeteorsDemo />
    </div>
  );
}
