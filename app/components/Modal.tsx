import React, { useRef } from "react";
import Bg from "../../public/assets/bgCubos.svg";
import QrCode from "../../public/assets/Qrlogo.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Modal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="w-full flex items-center justify-center lg:flex-row flex-col  shadow-2xl mt-10 mb-20  "
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex items-center justify-around flex-col lg:py-20 py-10  px-10 gap-16"
      >
        <div className="flex flex-col gap-2  items-start justify-center">
          <h2 className="text-4xl font-extrabold text-white">
            Quer testar o movita?
          </h2>
          <p className="text-lg text-white">
            Já está disponível a realidade aumentada para testes.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="bg-[#238298] text-white font-extrabold text-2xl w-full outline-none text-center rounded-xl py-2  hover:text-[#FFC501]  transition-all"
          >
            <a href="https://movita-ar.vercel.app" className="no-underline">
              Movita AR
            </a>
          </motion.div>
          <label className="text-xs font-extralight text-white ">
            O modelo de seu dispositivo pode não ter compatibilidade ainda.
          </label>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 h-96  w-full flex items-center justify-center flex-col bg-[url('/assets/bgCubos.svg')] bg-cover p-3 lg:rounded-r-2xl rounded-b-2xl "
      >
        <div className="bg-white p-6  flex items-center justify-center rounded-2xl">
          <Image src={QrCode} alt="Imagem" className="w-full"></Image>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
