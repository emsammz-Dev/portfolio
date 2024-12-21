"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdAlternateEmail } from "react-icons/md";

function MainNavbar() {
  const pathname = usePathname();

  const isActive = (pathnameArg: string) => pathnameArg == pathname;
  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex max-md:flex-col justify-between pt-12 px-12 bg-gradient-to-tl from-blue-900 via-teal-900 to-sky-900  bg-fixed z-50">
        <Link href={"/"} className="font-mono text-5xl flex hover:animate-pulse">
          <MdAlternateEmail className="text-red-400 hover:animate-spin" />
          <div className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-green-400">
            EMSAMMZ
          </div>
        </Link>
        <div className="flex max-md:justify-between gap-4 items-end text-xl md:text-2xl xl:text-3xl">
          <div>
            <Link
              href={"/"}
              className={` hover:text-white/50 hover:animate-pulse ${isActive("/") ? `text-white/50` : ""
                }`}
            >
              <div>Home</div>
            </Link>
          </div>

          <Link
            href={"/em/about"}
            className={` hover:text-white/50  hover:animate-pulse ${isActive("/em/about") ? `text-white/50` : ""
              }`}
          >
            <div>About</div>
          </Link>

          <Link
            href={"/em/portfolio"}
            className={` hover:text-white/50 hover:animate-pulse ${isActive("/em/portfolio") ? `text-white/50` : ""
              }`}
          >
            <div>Portfolio</div>
          </Link>

          <Link
            href={"/em/services"}
            className={` hover:text-white/50 hover:animate-pulse ${isActive("/em/services") ? `text-white/50` : ""
              }`}
          >
            <div>Services</div>
          </Link>

          <Link
            href={"/em/contact"}
            className={` hover:text-white/50 hover:animate-pulse ${isActive("/em/contact") ? `text-white/50` : ""
              }`}
          >
            <div>Contact</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainNavbar;
