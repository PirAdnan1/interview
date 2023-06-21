import React from "react";
import Container from "@/components/Container";

function Section2() {
  return (
    <Container>
    <div className="mt-20 flex flex-col justify-center max-w-[900px] mx-auto bg-white px-4 sm:px-0">
      <video
        controls
        width={900}
        height={500}
        className="mx-auto mt-4 rounded-2xl"
      >
        <source src="/section2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="text-2xl font-semibold mt-3">
      Get insights about your answers.
      </h1>
      <p className="max-w-[610px] mt-3 text-lg">
        No grades, just insights about what you said. See job-related terms you
        used, your most-used words, and talking points you covered.
      </p>
    </div>
    </Container>
  );
}

export default Section2;
