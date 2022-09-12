import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return (
      <div name="home" className="w-full h-screen bg-[#ffd22e]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-pink-600 text-[20px] px-1">Hi! My name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-white">
            KIM MI SUNG
          </h1>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#1e1e1e]">
            I'm a Frontend Developer.
          </h1>
          <p className=" text-[20px] text-gray-700 pt-4 max-w-[700px]">
            자리가 사람을 만든다. 좋은 회사, 좋은 팀원 안에서 좋은 인재로
            성장한다.
          </p>
          <p className="text-[18px] text-gray-700 font-bold pb-4 max-w-[700px]">
            My Keyword : Make, Study and Service
          </p>
          {/* <div>
            <button className="text-black border-black border-2 px-6 py-3 my-2 flex items-center hover:bg-[#217aff] hover:border-[#217aff]">
              Start <HiArrowNarrowRight className="ml-3" />
            </button>
          </div> */}
        </div>
      </div>
    ); 
}

export default Home