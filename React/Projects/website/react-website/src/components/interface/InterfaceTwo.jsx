import React from 'react'
import VideoCard from '../videoCard/VideoCard'

const InterfaceTwo = () => {
  return (
  <>
    <div className="h-min p-5 w-full bg-black flex justify-center items-center pt-20 flex-col ">
        <div className="h-50 w-1/2  border-2 text-center">
          <h1 className="text-white text-[50px] font-bold">
         Write components with code and markup
          </h1>
          <p className="text-white text-lg mt-2">
           React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map. Learning React is learning programming.
          </p>
        </div>
        <VideoCard />
        <div className="h-50 w-1/2  border-2 text-center mt-6">
          <p className="text-white text-xl mt-4 text-center">
        This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete.
          </p>
        </div>
      </div>
  </>
  )
}

export default InterfaceTwo