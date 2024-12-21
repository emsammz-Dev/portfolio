"use client";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { GrServices } from "react-icons/gr";

export default function ServicesCompOne() {
  return (
    <>
      <div id="servicemain" className="relative">
        {/* screen1 */}
        <div className="h-screen md:pt-24 max-md:pt-[120px] flex flex-col gap-6 justify-center items-center text-balance text-center text-3xl px-12">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
            className="p-2 rounded-sm shadow-md shadow-black text-black italic max-md:text-2xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            voluptates earum excepturi ut quis in quaerat id tempore deleniti
            ipsum cum quas, hic nemo? Culpa.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
            className="flex max-md:flex-col gap-4"
          >
            <Link
              className="shadow-md outline-dotted hover:outline-dashed shadow-black hover:text-black rounded-sm text-xl  max-md:text-lg px-2"
              href={"#scope"}
            >
              Services We Offer
            </Link>
            <Link
              className="shadow-md outline-dotted hover:outline-dashed shadow-black hover:text-black rounded-sm text-xl max-md:text-lg px-2"
              href={"/em/contact"}
            >
              Contact us
            </Link>
          </motion.div>
        </div>
        {/* screen2 */}
        <div
          id="scope"
          className="flex flex-col gap-6 text-4xl max-md:text-2xl p-12"
        >
          {/* heading */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
            className="flex gap-1 p-2 items-center shadow-sm shadow-black rounded-sm"
          >
            <GrServices />
            <label>Scope Of Work</label>
          </motion.div>
          {/* 1 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
            className="flex flex-col gap-2 p-2 shadow-sm shadow-black rounded-sm"
          >
            <div className="border-b-[1px]">Planning & Research</div>
            <div className="text-2xl  max-md:text-xl italic">
              <ul>
                <li>&bull; Understanding client requirements</li>
                <li>&bull; Market and competitor analysis</li>
                <li>&bull; Project timeline and milestones</li>
              </ul>
            </div>
          </motion.div>
          {/* 2 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
            className="flex flex-col gap-2 p-2 shadow-sm shadow-black rounded-sm"
          >
            <div className="border-b-[1px]">Design</div>
            <div className="text-2xl max-md:text-xl italic">
              <ul>
                <li>&bull; Creating wireframes and mockups</li>
                <li>&bull; User Experience (UX) design</li>
                <li>&bull; User Interface (UI) design</li>
                <li>&bull; Feedback and revisions</li>
              </ul>
            </div>
          </motion.div>
          {/* 3 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
            className="flex flex-col gap-2 p-2 shadow-sm shadow-black rounded-sm"
          >
            <div className="border-b-[1px] pb-2">Development</div>
            <div className="text-2xl max-md:text-xl italic">
              <ul>
                <li>&bull; Frontend development (HTML, CSS, JavaScript)</li>
                <li>
                  &bull; Backend development (if applicable, e.g., database
                  setup)
                </li>
                <li>&bull; CMS integration (e.g., WordPress, custom CMS)</li>
                <li>&bull; Responsive design for mobile and desktop</li>
              </ul>
            </div>
          </motion.div>
          {/* 4 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
            className="flex flex-col gap-2 p-2 shadow-sm shadow-black rounded-sm"
          >
            <div className="border-b-[1px] pb-2">Testing</div>
            <div className="text-2xl max-md:text-xl italic">
              <ul>
                <li>&bull; Cross-browser compatibility testing</li>
                <li>&bull; Usability testing</li>
                <li>&bull; Bug fixing and revisions</li>
              </ul>
            </div>
          </motion.div>
          {/* 5 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
            className="flex flex-col gap-2 p-2 shadow-sm shadow-black rounded-sm"
          >
            <div className="border-b-[1px] pb-2">Deployment</div>
            <div className="text-2xl max-md:text-xl italic">
              <ul>
                <li>&bull; Domain setup</li>
                <li>&bull; Hosting setup</li>
                <li>&bull; Final deployment to the server</li>
              </ul>
            </div>
          </motion.div>
          {/* 6 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
            className="flex flex-col gap-2 p-2 shadow-sm shadow-black rounded-sm"
          >
            <div className="border-b-[1px] pb-2">Maintenance & Support</div>
            <div className="text-2xl max-md:text-xl italic">
              <ul>
                <li>&bull; Regular updates and backups</li>
                <li>&bull; Technical support</li>
                <li>&bull; Content updates</li>
              </ul>
            </div>
          </motion.div>

          <div className="text-xl max-md:text-lg italic text-right">
            **terms and condition and contact infomation
          </div>
        </div>
        {/* upbtn */}
        <Link
          href={"#servicemain"}
          className="absolute bottom-6 right-6 rounded-full border-[1px] border-teal-700 hover:border-teal-400 shadow-md shadow-black p-2 animate-bounce"
        >
          <FaAngleUp />
        </Link>
      </div>
    </>
  );
}
