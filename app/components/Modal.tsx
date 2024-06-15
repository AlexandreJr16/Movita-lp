import React from "react";
import Bg from "../../public/assets/bgCubos.svg";
import QrCode from "../../public/assets/Qrlogo.svg";
import Image from "next/image";

const Modal = () => {
  return (
    <div className="w-full flex items-center justify-center  shadow-2xl mt-10 mb-20  ">
      <div className="flex-1 flex items-center justify-around flex-col py-20 px-10 gap-16">
        <div className="flex flex-col gap-2  items-start justify-center">
          <h2 className="text-4xl font-extrabold">Quer testar o movita?</h2>
          <p className="text-lg">
            Já está disponível a realidade aumentada para testes.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <a
            href="https://movita-ar.vercel.app"
            className="bg-[#238298] text-white font-extrabold text-2xl w-full outline-none text-center rounded-xl py-2 hover:scale-105 hover:text-[#FFC501]  transition-all"
          >
            Movita AR
          </a>
          <label className="text-xs font-extralight ">
            O modelo de seu dispositivo pode não ter compatibilidade ainda.
          </label>
        </div>
      </div>
      <div className="flex-1 h-96  w-full flex items-center justify-center flex-col bg-[url('/assets/bgCubos.svg')] bg-cover p-3 rounded-r-2xl ">
        <Image src={QrCode} alt="Imagem" className="w-2/4 rounded"></Image>
      </div>
    </div>
  );
};

export default Modal;
