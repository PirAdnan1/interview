import React from "react";

// assets

function Section1() {
  return (
    <div className="mt-20 flex flex-col justify-center max-w-[900px] mx-auto bg-white px-4 sm:px-0">
      <h1 className="text-3xl text-center">How its works:</h1>
      <video
        controls
        width={900}
        height={500}
        className="mx-auto mt-4 rounded-2xl"
      >
        <source src="/section1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="text-2xl font-semibold mt-3">Practice answering interview questions</h1>
      <p className="max-w-[610px] mt-3 text-lg">
        Get comfortable answering questions from industry experts. Just talk and
        your answers are transcribed in real time
      </p>
    </div>
  );
}

export default Section1;
