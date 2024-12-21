"use client";
import { motion } from 'motion/react'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

export default function ContactCompOne() {
    function scrollIntoView() {
        throw new Error('Function not implemented.');
    }

    return (
        <div className="h-screen md:pt-28 max-md:pt-[130px] flex text-3xl max-md:text-2xl p-10 bg-gradient-to-tl from-sky-900/50 via-teal-900 to-blue-900/50 bg-fixed">
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
                className='flex-1 flex max-md:flex-col shadow-md shadow-black p-4'>
                {/* info */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.7,
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                        restDelta: 0.001,
                    }}
                    className="flex flex-col justify-start">
                    <div>HITESH</div>
                    <div>addfvbcds@gmail.com</div>
                    <div className="text-xl max-md:text-lg italic text-balance">
                        Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor
                        sit amet.
                    </div>
                    <div className="text-lg max-md:text-sm italic text-balance">
                        Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor
                        sit amet.
                    </div>
                    <div>Bangalore,India <span className='text-lg'>560066</span></div>
                </motion.div>
                {/* social links */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.7,
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                        restDelta: 0.001,
                    }} className="flex-1 flex flex-col gap-2 justify-end items-end">
                    <div className="text-xl max-md:text-lg italic border-b-[1px]">Platform to connect</div>
                    <div className="flex gap-4">

                        <FaFacebookF

                            className="hover:text-white/50 hover:animate-pulse"
                        />

                        <FaInstagram
                            className="hover:text-white/50  hover:animate-pulse"
                        />


                        <FaLinkedinIn
                            className="hover:text-white/50  hover:animate-pulse"
                        />

                        <FaGithub
                            className="hover:text-white/50 hover:animate-pulse"
                        />

                    </div>
                </motion.div >
            </motion.div>
        </div >
    )
}
