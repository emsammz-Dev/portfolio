"use client";
import { motion } from "motion/react";
import Link from "next/link";
import React, { Suspense } from "react";
import { FaAngleUp, FaGithub } from "react-icons/fa";
import Loading from "../loading";

export default function PortfolioCompOne() {
  return (
    <div className="relative">
      <Suspense fallback={<Loading />}>
        <div className="h-screen max-md:pt-24 md:pt-[68px] flex text-4xl">
          <div className="flex-1 flex p-12">
            <div className="flex-1 flex max-md:flex-col">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  restDelta: 0.001,
                }}
                className="flex-1 flex max:md:flex-col text-center text-balance items-center  max-md:text-3xl"
              >
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                nulla"
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  restDelta: 0.001,
                }}
                className="bg-gradient-to-br bg-left-bottom bg-cover from-red-500 via-gray-900 to-orange-500 bg-fixed flex-1 rounded-sm shadow-lg shadow-black"
              />
            </div>
          </div>
        </div>
        {/* screen2 */}
        <div className="flex flex-col gap-4 text-4xl px-12">
          <div className="flex items-center rounded-sm gap-2 shadow-md shadow-black max-md:text-3xl">
            <FaGithub />
            <div>Projects</div>
          </div>
          <div className="border-b-[1px] italic flex justify-end max-md:text-2xl">
            Personal Sites
          </div>
          <div className="grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 justify-items-center py-8 gap-8">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ type: "spring" }}
              className="w-[200px] h-[150px] flex items-end bg-gradient-to-tr from-red-400 to-green-400 hover:from-green-400 hover:to-red-400 shadow-xl shadow-black rounded-md"
            >
              <Link
                href={"#"}
                className="rotate-180 flex-1 text-sm flex justify-center bg-white text-black shadow-black"
              >
                lorem
              </Link>
            </motion.div>
            <div className="w-[200px] h-[150px] bg-white"></div>
            <div className="w-[200px] h-[150px] bg-white"></div>
            <div className="w-[200px] h-[150px] bg-white"></div>
            <div className="w-[200px] h-[150px] bg-white"></div>
            <div className="w-[200px] h-[150px] bg-white"></div>
            <div className="w-[200px] h-[150px] bg-white"></div>
            <div className="w-[200px] h-[150px] bg-white"></div>
          </div>
          <div className="border-b-[1px] italic flex justify-end  max-md:text-2xl">
            e-commerce
          </div>
          <div className="grid grid-cols-4 max-xl:grid-cols-2 justify-items-center py-8 gap-8">
            <div className="w-[200px] h-[150px] bg-white"></div>
            <div className="w-[200px] h-[150px] bg-white"></div>
            <div className="w-[200px] h-[150px] bg-white"></div>
          </div>
          <div className="border-b-[1px] italic flex justify-end  max-md:text-2xl">
            animation-centric
          </div>
          <div className="grid grid-cols-4 max-xl:grid-cols-2 justify-items-center py-8 gap-8">
            <div className="w-[200px] h-[150px] bg-white"></div>
            <div className="w-[200px] h-[150px] bg-white"></div>
            <div className="w-[200px] h-[150px] bg-white"></div>
            <div className="w-[200px] h-[150px] bg-white"></div>
            <div className="w-[200px] h-[150px] bg-white"></div>
          </div>
        </div>
      </Suspense>
      <Link
        href={"#portfoliomain"}
        className="absolute bottom-6 right-6 rounded-full border-[1px] border-teal-700 hover:border-teal-400 shadow-md shadow-black p-2 animate-bounce"
      >
        <FaAngleUp />
      </Link>
    </div>
  );
}
