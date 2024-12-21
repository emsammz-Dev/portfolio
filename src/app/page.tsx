"use client";
import Head from "next/head";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleUp, FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Home() {
  const pathname = usePathname();

  const isActive = (pathnameArg: string) => pathnameArg === pathname;
  return (
    <>
      <div id="homemain" className="relative">
        {/* 1 */}
        <div className="h-screen pt-12 px-12 flex flex-col bg-gradient-to-tl from-blue-900/50 via-teal-900 to-sky-900/50 bg-fixed">
          {/* home header */}
          <div className=" flex justify-between">
            <div className="font-mono text-5xl hover:text-white/50 hover:animate-pulse">
              <Link href={"/"} className="font-mono text-5xl flex ">
                <MdAlternateEmail className="text-red-400 hover:animate-spin" />
                <div className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-green-400">
                  EMSAMMZ
                </div>
              </Link>
            </div>
            <div className="flex gap-6">
              <div>
                <FaFacebookF
                  size={30}
                  className="hover:text-white/50 hover:animate-pulse"
                />
              </div>
              <div>
                <FaInstagram
                  size={30}
                  className="hover:text-white/50  hover:animate-pulse"
                />
              </div>
              <div>
                <FaLinkedinIn
                  size={30}
                  className="hover:text-white/50  hover:animate-pulse"
                />
              </div>
            </div>
          </div>
          {/* Navigation */}
          <div className="relative flex max-md:flex-col flex-1 mt-4 mb-12 shadow-md shadow-black">
            <div className="flex-1 bg-home-section backdrop-blur-2xl bg-center bg-cover bg-left bg-fixed" />
            {/* more than md */}

            <div className="max-md:hidden p-6 text-5xl flex flex-col items-end justify-center gap-4">
              <div>
                <Link
                  href={"/"}
                  className={` hover:text-white/50  hover:animate-pulse ${isActive("/") ? `text-white/50` : ""
                    }`}
                >
                  <div>Home</div>
                </Link>
                <div className="text-sm flex justify-end gap-2 italic">
                  <Link href={"#step1"}>step1</Link>
                  <Link href={"#step2"}>step2</Link>
                </div>
              </div>

              <Link
                href={"/em/about"}
                className={` hover:text-white/50  hover:animate-pulse ${isActive("/about") ? `text-white/50` : ""
                  }`}
              >
                <div>About</div>
              </Link>

              <Link
                href={"/em/portfolio"}
                className={` hover:text-white/50 hover:animate-pulse ${isActive("/portfolio") ? `text-white/50` : ""
                  }`}
              >
                <div>Portfolio</div>
              </Link>

              <Link
                href={"/em/services"}
                className={` hover:text-white/50 hover:animate-pulse ${isActive("/services") ? `text-white/50` : ""
                  }`}
              >
                <div>Services</div>
              </Link>

              <Link
                href={"/em/contact"}
                className={` hover:text-white/50 hover:animate-pulse ${isActive("/contact") ? `text-white/50` : ""
                  }`}
              >
                <div>Contact</div>
              </Link>
            </div>

            {/* small md */}
            <div className="md:hidden absolute text-black right-0 bottom-0">
              <div className="flex justify-between items-end p-6 text-5xl flex-col">
                <div>
                  <Link
                    href={"#home"}
                    className={` hover:text-white/50 hover:animate-pulse ${isActive("/") ? `text-white` : ""
                      }`}
                  >
                    <div>Home</div>
                  </Link>
                  <div className="text-sm flex justify-end gap-2 italic">
                    <Link href={"#step1"}>step1</Link>
                    <Link href={"#step2"}>step2</Link>
                  </div>
                </div>

                <Link
                  href={"/em/about"}
                  className={` hover:text-white/50  hover:animate-pulse ${isActive("/about") ? `text-white/50` : ""
                    }`}
                >
                  <div>About</div>
                </Link>

                <Link
                  href={"/em/portfolio"}
                  className={` hover:text-white/50 hover:animate-pulse ${isActive("/portfolio") ? `text-white/50` : ""
                    }`}
                >
                  <div>Portfolio</div>
                </Link>

                <Link
                  href={"/em/services"}
                  className={` hover:text-white/50 hover:animate-pulse ${isActive("/services") ? `text-white/50` : ""
                    }`}
                >
                  <div>Services</div>
                </Link>

                <Link
                  href={"/em/contact"}
                  className={` hover:text-white/50 hover:animate-pulse ${isActive("/contact") ? `text-white/50` : ""
                    }`}
                >
                  <div>Contact</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div
          id="step1"
          className="h-screen flex max-md:flex-col p-12 bg-gradient-to-tl from-sky-900/50 via-teal-900 to-blue-900/50 bg-fixed"
        >
          <div className="flex-1 flex flex-col justify-center text-4xl items-center gap-2">
            <span className="italic">
              "For every minute spent in organizing, an hour is earned.”
            </span>
            - Benjamin Franklin
          </div>
          <div className="flex-1 p-5 text-5xl text-black flex flex-col justify-evenly rounded-sm font-mono font-semibold">
            <div className="flex justify-center bg-custom-bg bg-cover bg-left bg-fixed rounded-sm shadow-md hover:shadow-lg hover:shadow-black shadow-black">
              Organize
            </div>
            <div className="flex justify-end bg-custom-bg bg-cover bg-left bg-fixed rounded-sm shadow-md hover:shadow-lg hover:shadow-black shadow-black">
              Simplify
            </div>
            <div className="flex justify-center bg-custom-bg bg-cover bg-left bg-fixed rounded-sm shadow-md hover:shadow-lg hover:shadow-black shadow-black">
              Optimize
            </div>
          </div>
        </div>
        <Link
          href={"#homemain"}
          className="absolute bottom-6 right-6 rounded-full border-[1px] border-teal-700 hover:border-teal-400 shadow-md shadow-black p-2 animate-bounce"
        >
          <FaAngleUp />
        </Link>
      </div>
    </>
  );
}
