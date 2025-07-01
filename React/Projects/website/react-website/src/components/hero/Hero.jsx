import React from "react";
import ReactLogo from "../../assets/react.svg";

const Hero = () => {
  return (
    <section className="text-center py-20 bg-gray-800 text-white">
      <img
        src={ReactLogo}
        alt="React Logo Large"
        className="mx-auto w-24 mb-6"
      />
      <h1 className="text-4xl font-bold">React</h1>
      <p className="text-3xl mt-2 mb-6">
        The library for web and native user interfaces
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-cyan-400 text-black px-4 py-2 rounded hover:bg-cyan-300">
          Learn React
        </button>
        <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black">
          API Reference
        </button>
      </div>
    </section>
  );
};

export default Hero;
