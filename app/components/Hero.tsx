import Image from "next/image";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { motion } from "framer-motion";
import HeroImage from "@/public/assets/file.png";

export function Hero() {
  return (
    <div className="pt-4 lg:pt-10 flex items-center justify-center flex-wrap w-full flex-row">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, x: -100 }}
        exit={{ opacity: 0 }}
        className=" lg:w-1/2 flex items-start justify-center flex-col lg:p-20 p-5 pb-7"
      >
        <h1 className="text-center  text-[#fff] font-bold text-6xl  lg:text-9xl lg:leading-[72px] hover:text-[#FFC501] hover:scale-105 transition-all ">
          Movita
        </h1>
        <p className="font-medium text-xl pt-6 text-[#fff] ">
          A sua plataforma Mobile e Web para auxiliar na venda de móveis
          planejados.
        </p>
      </motion.div>

      <div className="flex flex-col h-full items-center justify-center w-full lg:w-1/2 gap-3">
        <motion.div
          animate={{
            y: [-10, -20, -10, 0, -10],
            x: [-10, 0, -10, -20, -10],
          }}
          transition={{
            ease: "linear",
            duration: 6,
            repeat: Infinity,
          }}
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={HeroImage}
            alt="hero image"
            className=" lg:w-5/6 w-5/6 hover:scale-105 transition self-center mx-8 lg:mx-0"
          />
        </motion.div>

        {/* <a
          href="https://www.instagram.com/projetomovita/"
          className="h-full flex items-center justify-start flex-row gap-5 p-5 lg:p-0 lg:justify-center outline-none"
        >
          <h5 className="font-medium">Instagram:</h5>
          <FaInstagram size={30} />
        </a> */}
      </div>
    </div>
  );
}
