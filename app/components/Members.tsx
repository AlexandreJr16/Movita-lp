"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { GoMail } from "@react-icons/all-files/go/GoMail";
import { GrLinkedin } from "@react-icons/all-files/gr/GrLinkedin";

export function Members() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="py-[48px] lg:py-[60px] "
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        className="text-[#fff] text-center font-bold  text-4xl lg:text-5xl pb-8 cursor-pointer"
      >
        Equipe Movita
      </motion.h1>

      <div className="flex flex-col gap-y-6  lg:flex-row  lg:gap-x-10 lg:justify-between items-center w-full px-3 lg:px-11 ">
        <motion.div
          transition={{ ease: "linear" }}
          whileHover={{ boxShadow: "0px 0px 10px #000" }}
          className="w-4/5 lg:w-3/6 rounded-2xl bg-[#f2f2f2] p-2  px-0 flex flex-col lg:justify-between  items-center hover:scale-105 transition "
        >
          <Image
            src={require("@/public/assets/ale.png")}
            alt="Ola"
            className="w-full aspect-w-1 aspect-h-1"
          />
          <div className="w-full flex items-start justify-center flex-col p-5">
            <h1 className="lg:text-2xl text-2xl font-semibold text-[#1f1f1f] flex w-full justify-between items-center">
              Alexandre Junior
            </h1>
            <h3 className="lg:text-base font-light text-[#1f1f1f]">
              Programador
            </h3>
            <p className="text-sm font-extralight pt-2">
              Responsável por{" "}
              <b className="bg-[#5DBDD3]">transformar ideias e requisitos</b> em
              software funcional.
            </p>
            <div className="w-full flex items-center justify-start flex-row gap-3 pt-2">
              <a
                target="_blank"
                className="text-2xl "
                href="https://www.instagram.com/souza.al3"
              >
                <FaInstagram />
              </a>
              <a
                target="_blank"
                className="text-2xl "
                href="www.linkedin.com/in/alexandre-souza-480759288"
              >
                <GrLinkedin />
              </a>
              <a
                target="_blank"
                className="text-2xl "
                href="mailto:alexandrep.souzzza@gmail.com"
              >
                <GoMail />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          transition={{ ease: "linear" }}
          whileHover={{ boxShadow: "0px 0px 10px #000" }}
          className="w-4/5 lg:w-3/6 rounded-2xl bg-[#f2f2f2] p-2  px-0 flex flex-col lg:justify-between  items-center hover:scale-105 transition "
        >
          <Image
            src={require("@/public/assets/anna.png")}
            alt="Ola"
            className="w-full aspect-w-1 aspect-h-1"
          />
          <div className="w-full flex items-start justify-center flex-col p-5">
            <h1 className="lg:text-2xl text-2xl font-semibold text-[#1f1f1f] flex w-full justify-between items-center">
              Anna Luisa
            </h1>
            <h3 className="lg:text-base font-light text-[#1f1f1f]">Designer</h3>
            <p className="text-sm font-extralight pt-2">
              Responsável por criar um{" "}
              <b className="bg-[#A64029]">design funcional e atraente</b> para
              os usuários.
            </p>
            <div className="w-full flex items-center justify-start flex-row gap-3 pt-2">
              <a
                target="_blank"
                className="text-2xl "
                href="https://www.instagram.com/souza.al3"
              >
                <FaInstagram />
              </a>
              <a
                target="_blank"
                className="text-2xl "
                href="https://www.linkedin.com/in/alexandre-souza-480759288/"
              >
                <GrLinkedin />
              </a>
              <a
                target="_blank"
                className="text-2xl "
                href="https://www.instagram.com/souza.al3"
              >
                <GoMail />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          transition={{ ease: "linear" }}
          whileHover={{ boxShadow: "0px 0px 10px #000" }}
          className="w-4/5 lg:w-3/6 rounded-2xl bg-[#f2f2f2] p-2  px-0 flex flex-col lg:justify-between  items-center hover:scale-105 transition "
        >
          <Image
            src={require("@/public/assets/ihago.png")}
            alt="Ola"
            className="w-full aspect-w-1 aspect-h-1"
          />
          <div className="w-full flex items-start justify-center flex-col p-5">
            <h1 className="lg:text-2xl text-2xl font-semibold text-[#1f1f1f] flex w-full justify-between items-center">
              Alexandre Junior
            </h1>
            <h3 className="lg:text-base font-light text-[#1f1f1f]">
              Programador
            </h3>
            <p className="text-sm font-extralight pt-2">
              Responsável pela documentação e análise, além de garantir que o
              projeto{" "}
              <b className="bg-[#BF9969]">
                atenda aos objetivos estabelecidos.
              </b>
            </p>
            <div className="w-full flex items-center justify-start flex-row gap-3 pt-2">
              <a
                target="_blank"
                className="text-2xl "
                href="https://www.instagram.com/ihagonunes"
              >
                <FaInstagram />
              </a>
              <a
                target="_blank"
                className="text-2xl "
                href="https://www.linkedin.com/in/ihagonunes/"
              >
                <GrLinkedin />
              </a>
              <a
                target="_blank"
                className="text-2xl "
                href="mailto:ihagonunes@gmail.com"
              >
                <GoMail />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
