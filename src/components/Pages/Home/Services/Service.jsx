import React from "react";
import MeteorsDemo from "./CardCom";

export function Service() {
  return (
    <div id="service" className="w-full flex flex-col pt-16 pb-16 border-b-2 border-sky-400 px-12 ssxl:px-8 sxl:px-4 overflow-hidden" id="service" >
      <h1 className="text-2xl sssxl:text-6xl font-bold pt-0 pb-4 gradient"
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-once="false"
          data-aos-delay="100">SERVICES</h1>
      <p className="text-base sssxl:text-xl pt-0 pb-8 w-full md:w-1/2 text-slate-700"
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-once="false"
          data-aos-delay="100">
        Launch or redesign your website with my talent and expertise in digital
        branding.
      </p>
      <MeteorsDemo />
    </div>
  );
}
