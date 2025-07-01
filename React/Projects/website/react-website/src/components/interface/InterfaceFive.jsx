import React from "react";
import VideoCard from "../videoCard/VideoCard";

const InterfaceFive = () => {
  return (
    <>
      <div className="h-min p-5 w-full bg-black flex justify-center items-center pt-20 flex-col ">
        <div className="h-50 w-1/2  border-2 text-center">
          <h1 className="text-white text-[50px] font-bold">
           Use the best from every platform
          </h1>
          <p className="text-white text-lg mt-2">
           People love web and native apps for different reasons. React lets you build both web apps and native apps using the same skills. It leans upon each platform’s unique strengths to let your interfaces feel just right on every platform.
          </p>
        </div>
        <VideoCard />
        <div className="h-50 w-1/2  border-2 text-center mt-6">
          <p className="text-white text-xl mt-4 text-center">
         With React, you can be a web and a native developer. Your team can ship to many platforms without sacrificing the user experience. Your organization can bridge the platform silos, and form teams that own entire features end-to-end.
          </p>
        </div>
      </div>
    </>
  );
};

export default InterfaceFive;
