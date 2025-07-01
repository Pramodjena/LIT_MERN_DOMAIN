import React from "react";
import VideoCard from "../videoCard/VideoCard";

const InterfaceOne = () => {
  return (
    <>
      <div className="h-min p-5 w-full bg-black flex justify-center items-center pt-20 flex-col ">
        <div className="h-50 w-1/2  border-2 text-center">
          <h1 className="text-white text-[50px] font-bold">
            Create user interfaces from components
          </h1>
          <p className="text-white text-lg mt-2">
            React lets you build user interfaces out of individual pieces called
            components. Create your own React components like Thumbnail,
            LikeButton, and Video. Then combine them into entire screens, pages,
            and apps.
          </p>
        </div>
        <VideoCard />
        <div className="h-50 w-1/2  border-2 text-center mt-6">
          <p className="text-white text-lg text-center">
            Whether you work on your own or with thousands of other developers,
            using React feels the same. It is designed to let you seamlessly
            combine components written by independent people, teams, and
            organizations.
          </p>
        </div>
      </div>
    </>
  );
};

export default InterfaceOne;
