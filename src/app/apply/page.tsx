import React from 'react'
import { FaFacebook } from "react-icons/fa";
const apply = () => {
  return (
    <div>
      <div className='z-10 mx-4 my-10 w-full max-w-2xl flex-cols items-center justify-center border-2 ml-96 text-center'>
        <div className='text-4xl xs:text-3xl text-blue-900 h-max max-w-screen-sm flex justify-center items-center m-4 text-center'>
          Before continuing to the application please subscribe on these social media platforms.
          </div> 
          <div className='flex justify-center items-center'>
          <FaFacebook className='text-xl w-14 h-10 rounded-full bg-main text-white pt-1'/>
          </div>
          <div className='bg-blue-900 text-white w-40 h-10 flex items-center justify-center pt-2 ml-64 mt-6 opacity-70 text-center'>
            <button className='text-center pb-4 m-2 text-xl font-bold'>CONTINUE</button>
          </div>
          <div className='flex justify-center items-center mt-2 p-2'>
            <p>Already Applied?</p>
            <p className='text-sky-600 p-2'>Get Admit Card</p>
          </div>
        </div>
        <div className='z-10 mx-2 w-full max-h-20 h-auto max-w-2xl flex items-center justify-center border-2 ml-96 text-center'>
          <ol className='text-lg xs:text-xl px-3 text-blue-900 h-max mb-10 mt-10 max-w-screen-sm mx-2 flex justify-center items-center m-4 gap-4'>
            <li>1-FACEBOOK</li>
            <li>2-YOUTUBE</li>
             <li>3-TWITTER</li>
            <li>4-INSTAGRAM</li>
            <li>5-APPLY</li>
            </ol>
        </div>
    </div>
  )
}

export default apply