import React, { useState, useEffect } from "react";
import Image from "next/image";

// assets
import LogoImage from "@/assets/MainLogo.gif";

function Hero() {
  const [currentSpanIndex, setCurrentSpanIndex] = useState(0);


  const spans = ["Project UX Design", "Cybersecurity", `Data Analytics`, "E-Commerce", "IT-Support"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpanIndex((prevIndex) => (prevIndex + 1) % spans.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center pt-52 pb-36 px-4 sm:px-0 bg-[#F7F8FA]">
      <Image src={LogoImage} width={550} alt="..." />
      <p className="max-w-[650px] text-center text-xl mt-4 text-[#555E6D]">
        A quick way to prepare for your next interview in{" "}
        <span className={"show bg-blue-200 rounded-md px-2 whitespace-nowrap"}>{spans[currentSpanIndex]}</span><br />
        Practice key questions, get insights about your answers, and get more
        comfortable interviewing.
      </p>
      <div></div>
      <button className="bg-[#0B59D6] text-white px-7 py-3 text-xl rounded-lg mt-6">
        Start Praticing
      </button>
    </div>
  );
}

export default Hero;
