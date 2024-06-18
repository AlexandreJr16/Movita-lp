"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function Members() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="py-[48px] lg:py-[60px] "
    >
      <h1 className="text-[#FFC501] text-center font-bold  text-4xl lg:text-5xl pb-8">
        Equipe Movita
      </h1>

      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row items-center">
        <div className="w-4/5 lg:w-full rounded-[8px] bg-[#BF9969] items-start p-6 flex flex-col lg:justify-center hover:scale-105 transition">
          <Image
            src={require("@/public/assets/leandro.jpg")}
            alt="Ola"
            className="w-full  rounded-xl"
          />
          <h1 className="lg:text-2xl text-3xl font-semibold text-white">
            Ihago Nunes
          </h1>
          <h3 className="lg:text-base font-light text-white">Analista</h3>
        </div>

        <div className="w-4/5 lg:w-full rounded-[8px] bg-[#A64029] p-6 flex flex-col hover:scale-105 transition">
          <Image
            src={require("@/public/assets/joao.jpg")}
            alt="Ola"
            className="w-full  rounded-xl"
          />
          <h1 className="lg:text-2xl text-3xl font-semibold text-white">
            Anna Luisa
          </h1>
          <h3 className="lg:text-base font-light text-white">Analista</h3>
        </div>

        <div className="w-4/5 lg:w-full rounded-[8px] bg-[#36A5BF] p-6 flex flex-col lg:justify-between hover:scale-105 transition">
          <Image
            src={require("@/public/assets/eu.jpg")}
            alt="Ola"
            className="w-full  rounded-xl  aspect-w-1 aspect-h-1"
          />
          <h1 className="lg:text-2xl text-3xl font-semibold text-white">
            Alexandre Junior
          </h1>
          <h3 className="lg:text-base font-light text-white">Analista</h3>
        </div>
      </div>
    </motion.div>
  );
}
