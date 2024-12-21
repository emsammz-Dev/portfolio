import { BiLogoPostgresql } from "react-icons/bi";
import { FaMdb, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiFramer,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";

export default function MainFooter() {
  return (
    <div className="flex flex-col h-32  bg-gray-800/50">
      <div className="flex-1 flex justify-between px-4  border-t-[1px]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-2">
            <SiTailwindcss className="text-3xl max-md:text-xl" />
            <SiFramer className="text-3xl max-md:text-xl" />
            <FaNodeJs className="text-3xl max-md:text-xl" />
            <SiPrisma className="text-3xl max-md:text-xl" />
            <BiLogoPostgresql className="text-3xl max-md:text-xl" />
            <SiExpress className="text-3xl max-md:text-xl" />
            <SiNextdotjs className="text-3xl max-md:text-xl" />
            <FaMdb className="text-3xl max-md:text-xl" />
          </div>
        </div>
        <div className="flex flex-col justify-center text-xl max-md:text-sm">
          <div>EMSAMMZ</div>
          <div>Mumbai | Bangalore | Nagpur</div>
        </div>
      </div>
      <div className="bg-gray-700/50 px-2 flex items-center justify-between">
        <div>developed by @emsammz</div>
        <div>&copy; copyright 2024</div>
      </div>
    </div>
  );
}
