import Image from "next/image";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="pt-4 lg:pt-10 flex items-center justify-center flex-wrap w-full flex-row">
      <div className=" lg:w-1/2 flex items-start justify-center flex-col lg:p-20 p-5 pb-7">
        <h1 className="text-center  text-[#1f1f1f] font-bold text-6xl  lg:text-9xl lg:leading-[72px] hover:text-[#FFC501] hover:scale-105 transition-all ">
          Movita
        </h1>
        <p className="font-medium text-xl pt-6 text-[#1f1f1f] ">
          A sua plataforma Mobile e Web para auxiliar na venda de móveis
          planejados.
        </p>
      </div>

      {/* <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          repeat: 1000,
        }}
      /> */}
      <div className=" flex-col h-full items-center justify-center w-full lg:w-1/2 gap-3">
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
            src={require("../../public/assets/HeroImage.png")}
            alt="hero image"
            className=" lg:w-5/6 w-5/6 hover:scale-105 transition self-center mx-8 lg:mx-0"
          />
        </motion.div>

        <a
          href="https://www.instagram.com/projetomovita/"
          className="h-full flex items-center justify-start flex-row gap-5 p-5 lg:p-0 lg:justify-center outline-none"
        >
          <h5 className="font-medium">Sigam-nos no Instagram:</h5>
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
}
