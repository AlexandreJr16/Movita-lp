import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";

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
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" className="w-16 h-10 rounded-full" />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <a
              href={`#${item.id}`}
              className=" font-normal text-lg cursor-pointer text-black"
              key={index}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
