import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", id: "1" },
  { name: "Quem Somos", id: "2" },
  { name: "Objetivo Geral", id: "3" },
  { name: "App ", id: "4" },
  { name: "Site ", id: "5" },
  { name: "AR ", id: "6" },
];

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center justify-center ">
        <motion.div
          whileHover={{ backgroundColor: "#34C3E4" }}
          whileTap={{ rotate: 360 }}
          className="rounded-full  flex items-center justify-center bg-transparent w-12 h-12 lg:w-14.5 lg:h-14.5"
        >
          <Image src={Logo} alt="Logo" className="w-16 h-10 rounded-full  " />
        </motion.div>
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <motion.a
              whileHover={{ color: "#FFC501" }}
              href={`#${item.id}`}
              className=" font-normal text-lg cursor-pointer text-white"
              key={index}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
}
