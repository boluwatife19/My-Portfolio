import React from "react";
import RESU from "../../assets/Pdf/Paul.pdf";

export default function Resume() {
  return (
    <div className="w-screen h-screen">
      <embed src={RESU} type="application/pdf" className="w-screen h-screen" />
    </div>
  );
}
