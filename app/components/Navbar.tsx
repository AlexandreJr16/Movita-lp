import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";

const navLinks = [
  { name: "Quem somos" },
  { name: "Problemática" },
  { name: "Objetivo" },
  { name: "Resultado " },
];

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" className="w-16 h-10 rounded-full" />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p
              className=" font-normal text-lg cursor-pointer text-black"
              key={index}
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </nav>
  );
}
