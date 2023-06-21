import React, { useState, useEffect } from "react";
import Image from "next/image";

// component
import Container from "@/components/Container";

// assets
import LogoImage from "@/assets/MainLogo.gif";

function Hero() {
  const [currentSpanIndex, setCurrentSpanIndex] = useState(0);

  const spans = [
    "Project UX Design",
    "Cybersecurity",
    `Data Analytics`,
    "E-Commerce",
    "IT-Support",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpanIndex((prevIndex) => (prevIndex + 1) % spans.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F7F8FA]">
      <Container>
        <div className="flex flex-col justify-center items-center pt-52 pb-36 px-4 sm:px-0">
          <Image src={LogoImage} width={550} alt="..." />
          <div className="max-w-[650px] text-center text-xl mt-4 text-[#555E6D]">
            <div className="flex flex-col items-center sm:flex-row text-left sm:text-center">
              <span>
                A quick way to prepare for your next interview in&nbsp;
              </span>
              <span
                className={
                  "show bg-blue-200 rounded-md px-2 overflow-hidden flex max-w-fit whitespace-nowrap"
                }
              >
                {spans[currentSpanIndex]}
              </span>

              <br />
            </div>
            <span>
              Practice key questions, get insights about your answers, and get
              more comfortable interviewing.
            </span>
          </div>
          <div></div>
          <button className="bg-[#0B59D6] text-white px-7 py-3 text-xl rounded-lg mt-6">
            Start Praticing
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
