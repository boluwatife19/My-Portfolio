import React from "react";
import RESU from "../../assets/Pdf/Paul.pdf";

const Resume = () => {
  const downloadPdf = () => {
    // Using fetch to get the PDF file as a Blob
    fetch(RESU)
      .then(response => response.blob())
      .then(blob => {
        // Create a temporary URL object for the blob
        const url = window.URL.createObjectURL(new Blob([blob]));
        // Create a temporary <a> element to initiate the download
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Aregbesola_Paul.pdf"); // Specify the filename here
        document.body.appendChild(link);
        link.click();
        // Clean up by removing the temporary URL and <a> element
        link.parentNode.removeChild(link);
      })
      .catch(error => {
        console.error("Error fetching the PDF file: ", error);
      });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center flex flex-col">
      <div className="w-screen h-screen">
        <embed src={RESU} type="application/pdf" className="w-full md:h-full" />
      <button
        onClick={downloadPdf}
        className="bg-white text-slate-400 font-bold py-2 px-4 rounded m-6 mt-0 shadow md:hidden"
      >
        Download PDF
      </button>
      </div>
    </div>
  );
};

export default Resume;
