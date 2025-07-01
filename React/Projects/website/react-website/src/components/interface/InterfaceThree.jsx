import React from 'react'
import VideoCard from '../videoCard/VideoCard'

const InterfaceThree = () => {
  return (
    <>
    
      <div className="h-min p-5 w-full bg-black flex justify-center items-center pt-20 flex-col ">
        <div className="h-50 w-1/2  border-2 text-center">
          <h1 className="text-white text-[50px] font-bold">
         Add interactivity wherever you need it
          </h1>
          <p className="text-white text-lg mt-2">
          React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.
          </p>
        </div>
        <VideoCard />
        <div className="h-50 w-1/2  border-2 text-center mt-6">
          <p className="text-white text-xl mt-4 text-center">
       You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.
          </p>
        </div>

        <button className='border border-white text-white p-4 rounded-full'>Add React to your Page </button>
      </div>
    </>
  
  )
}

export default InterfaceThree