"use client";

import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Members } from "./components/Members";
import { motion, useScroll } from "framer-motion";
import { Model } from "./components/Model";
// import MeshComponent from "./components/3dModelViewer";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="flex-1  w-full">
      {/* <MeshComponent></MeshComponent> */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-3 bg-[#FFC501]  w-full z-10 origin-left"
      />

      <Navbar />
      <section id="1">
        <Hero />
      </section>
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <section id="2">
          <Members />
        </section>

        <Features />
      </div>
      <Footer />
    </div>
  );
}
