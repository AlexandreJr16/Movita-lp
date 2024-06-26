import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

export function Footer() {
  return (
    <div className="pt-[80px] pb-[40px] bg-[#1f1f1f] shadow-2xl">
      <a
        href="https://www.instagram.com/projetomovita/"
        className="flex items-center justify-center gap-x-[12px]"
      >
        <p className="font-bold text-[#fff] text-[17px]">@projetomovita</p>
        <FaInstagram size={30} color="#fff" />
      </a>
    </div>
  );
}
