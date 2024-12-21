"use client";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { BiLogoPostgresql, BiObjectsHorizontalLeft } from "react-icons/bi";
import { FaAngleUp, FaMdb, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiPrisma,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

export default function AboutCompOne() {
  return (
    <div id="aboutMain" className="relative z-10">
      {/* page1 */}
      <div className="md:h-screen pt-28 max-md:pt-36 md:pt-24 px-12 flex max-md:flex-col gap-8 bg-gradient-to-tl from-sky-900/50 via-teal-900 to-blue-900/50 bg-fixed font-sans">
        {/* profile image */}
        <div className="flex-1 flex justify-center items-center p-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
            whileHover={{ border: "3px solid green" }}
            className="rounded-full w-[250px] max-md:w-[150px] h-[250px] max-md:h-[150px] bg-white shadow-lg shadow-green-400/40"
          ></motion.div>
        </div>
        {/* info */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          }}
          className="flex-1 flex flex-col justify-center rounded-sm shadow-md p-2 md:my-6 text-4xl max-md:text-2xl gap-4"
        >
          <div>
            <div>Hello, I am Hitesh</div>
            <div>Full Stack Web Developer</div>
          </div>
          <div className="text-balance text-xl max-md:text-sm italic">
            My projects, often expressed through mesmerizing animations, powered
            by code and algorithms, seek to visually interpret and question the
            fluid nature and existential implications of time.
          </div>
          <ul className="text-2xl max-md:text-lg">
            <li>1. Creativity and Design Sense</li>
            <li>2. Technical Proficiency</li>
            <li>3. Attention to Detail</li>
            <li>4. User-Centered Focus</li>
            <li>5. Communication and Collaboration</li>
          </ul>
        </motion.div>
      </div>
      <div className="flex items-center h-[150px] max-md:h-[100px] bg-custom-bg bg-cover bg-fixed text-5xl max-md:text-3xl">
        <div className="flex-1 flex text-black justify-around  backdrop-blur-2xl p-2">
          <SiTailwindcss className="hover:scale-150 " />
          <SiFramer />
          <FaNodeJs />
          <SiPrisma />
          <BiLogoPostgresql />
          <SiExpress />
          <SiNextdotjs />
          <FaMdb />
        </div>
      </div>
      {/* page2 */}
      <div className="p-12 text-4xl max-md:text-2xl flex flex-col gap-6 font-sans overflow-x-hidden bg-gradient-to-tl from-blue-900/50 via-teal-900 to-sky-900/50 bg-fixed">
        {/* heading */}
        <motion.div
          className="flex items-center shadow-md shadow-black p-2 rounded-sm "
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          }}
        >
          <BiObjectsHorizontalLeft />
          <div>BIO</div>
        </motion.div>
        {/* 1 */}
        <motion.div
          initial={{ x: 50, scale: 0, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          }}
          className="shadow-md shadow-black p-2 rounded-sm"
        >
          <motion.div className="  border-b-[1px] pb-2">
            FROM Psycology To Digital Mastery
          </motion.div>
          <motion.div className="text-xl text-balance max-md:text-sm italic p-2">
            Before delving into the digital world, I pursued an academic path
            deeply rooted in understanding human behavior and cognition. I
            earned a Bachelors degree in Psychology, followed by a Masters
            degree in Cognitive Sciences, where I explored the intersection of
            the mind and technology. This foundation has profoundly influenced
            my approach to generative art and design, providing me with a unique
            perspective on creativity. It has also deepened my understanding of
            how artificial intelligence operates today. I began my journey as a
            web designer in 1999, finding creative fulfillment later with
            ActionScript, where I developed unique and interactive websites that
            pushed the boundaries of digital design.
          </motion.div>
        </motion.div>
        {/* 2 */}
        <motion.div
          initial={{ x: 50, scale: 0, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          }}
          className="shadow-md shadow-black p-2 rounded-sm"
        >
          <motion.div className="border-b-[1px] pb-2">And Now</motion.div>

          <motion.div className="text-xl text-balance max-md:text-sm italic p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            possimus aut impedit autem tenetur facere! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Odio, quidem.
          </motion.div>
        </motion.div>
        {/* 3 */}
        <motion.div
          initial={{ x: 50, scale: 0, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          }}
          className="shadow-md shadow-black p-2"
        >
          <motion.div className="border-b-[1px] pb-2">
            Behind The Code
          </motion.div>

          <motion.div className="text-xl text-balance max-md:text-sm italic p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            possimus aut impedit autem tenetur facere! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quam, omnis.
          </motion.div>
        </motion.div>
      </div>
      {/* page3 */}
      <div className="h-screen"></div>
      {/* up button */}
      <Link
        href={"#aboutmain"}
        className="absolute -bottom-5 right-6 rounded-full border-2 border-teal-700 hover:border-teal-400 shadow-md shadow-black p-2 animate-bounce"
      >
        <FaAngleUp size={20} />
      </Link>
    </div>
  );
}
