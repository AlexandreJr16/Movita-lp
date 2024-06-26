import Image from "next/image";
import Feature2 from "../../public/assets/feature-2.svg";
import { AiOutlineCheck } from "@react-icons/all-files/ai/AiOutlineCheck";
import Vita from "@/public/assets/vita.svg";
import { Model } from "./Model";
import LoginWeb from "../../public/assets/Login.svg";
import Cadastro from "../../public/assets/mobile/Cadastro.png";
import MenuPrincipal from "../../public/assets/mobile/Menuprincipal.png";
import TelaInicial from "../../public/assets/mobile/TelaInicial.png";
import BoxCard from "../../public/assets/boxCard.svg";

import { motion } from "framer-motion";

export function Features() {
  return (
    <div className="flex flex-col px-2 gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px] ">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        id="3"
        className="flex flex-col gap-x-6 sm:flex-row-reverse items-center justify-center"
      >
        <Image
          loading="lazy"
          src={BoxCard}
          alt="Feature 1 image"
          className="hidden w-1/2 rounded-2xl sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-bold text-[#FFC501] lg:text-[18px] ">
            Objetivo Geral
          </h3>
          <h1 className="pt-[12px] text-2xl font-semibold text-[#fff] lg:text-[42px] lg:leading-[50px]">
            Desenvolver uma plataforma para clientes que buscam contratar
            empresas fabricantes de móveis planejados.
          </h1>
          <Image
            loading="lazy"
            src={BoxCard}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden rounded-2xl"
          />
          <p className="py-[24px] text-[#fff] lg:text-[18px]">
            Com isso, buscamos:
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#fff]">
              <span>
                <AiOutlineCheck />
              </span>
              Conectar clientes com empresas fabricantes de móveis planejados.
            </li>
            <li className="flex items-center gap-x-2 text-[#fff]">
              <span>
                <AiOutlineCheck />
              </span>
              Usar realidade aumentada para exibição de móveis planejados de
              forma a aumentar a certeza do cliente.
            </li>
            <li className="flex items-center gap-x-2 text-[#fff]">
              <span>
                <AiOutlineCheck />
              </span>
              Permitir o registro de dados do projeto de móveis planejados para
              garantia de sua prestação de serviços.
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        id="4"
        className="flex flex-col gap-x-6 sm:flex-row items-center justify-center"
      >
        <div className="hidden w-1/2 sm:block ">
          <div className="w-full self-center justify-self-center flex gap-3 items-center justify-center">
            <Image
              loading="lazy"
              className="w-1/3"
              src={MenuPrincipal}
              alt="Feature 1 image"
            />
            <Image
              loading="lazy"
              className="w-1/3"
              src={Cadastro}
              alt="Feature 1 image"
            />
            <Image
              loading="lazy"
              className="w-1/3"
              src={TelaInicial}
              alt="Feature 1 image"
            />
          </div>
        </div>
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-bold text-[#36A5BF] lg:text-[18px] ">
            Resultado
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#fff] lg:text-[42px] lg:leading-[58px]">
            App Movita
          </h1>
          <div className="pt-[24px] sm:hidden w-full flex">
            <div className="w-full flex self-center justify-self-center gap-3 items-center justify-center">
              <Image
                loading="lazy"
                className="w-1/3"
                src={Cadastro}
                alt="Feature 1 image"
              />
              <Image
                loading="lazy"
                className="w-1/3"
                src={MenuPrincipal}
                alt="Feature 1 image"
              />
              <Image
                loading="lazy"
                className="w-1/3"
                src={TelaInicial}
                alt="Feature 1 image"
              />
            </div>
          </div>
          <p className="py-[24px] text-[#fff] lg:text-[18px]">
            O movita conta com um aplicativo voltado ao cliente que busca o seu
            móvel planejado.
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#fff]">
              <span>
                <AiOutlineCheck />
              </span>
              Criar uma conta no Movita
            </li>
            <li className="flex items-center gap-x-2 text-[#fff]">
              <span>
                <AiOutlineCheck />
              </span>
              Buscar empresas e verificar os projetos já feitos pela comunidade
            </li>
            <li className="flex items-center gap-x-2 text-[#fff]">
              <span>
                <AiOutlineCheck />
              </span>
              Conversar com a empresa de móveis planejados e criar seu projeto
            </li>
            <li className="flex items-center gap-x-2 text-[#fff]">
              <span>
                <AiOutlineCheck />
              </span>
              Acompanhar o progresso do móvel
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        id="5"
        className="flex flex-col gap-x-6 sm:flex-row-reverse items-center justify-center"
      >
        <Image
          loading="lazy"
          src={LoginWeb}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#A64029] lg:text-[18px] ">
            Resultado
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#fff] lg:text-[42px] lg:leading-[58px]">
            Site Movita
          </h1>
          <Image
            loading="lazy"
            src={LoginWeb}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#fff] lg:text-[18px]">
            O movita conta também com o site destinado a empresas que buscam
            vender móveis planejados
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#fff]">
              <span>
                <AiOutlineCheck />
              </span>
              Criar uma conta no Movita
            </li>
            <li className="flex items-center gap-x-2 text-[#fff]">
              <span>
                <AiOutlineCheck />
              </span>
              Criar projeto de móvel planejado
            </li>
            <li className="flex items-center gap-x-2 text-[#fff]">
              <span>
                <AiOutlineCheck />
              </span>
              Gerenciar projetos
            </li>
            <li className="flex items-center gap-x-2 text-[#fff]">
              <span>
                <AiOutlineCheck />
              </span>
              Conectar-se aos clientes por meio do chat
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        id="6"
        className="flex lg:items-center lg:justify-center flex-col gap-x-6 sm:flex-row"
      >
        <Model className=" h-96 lg:h-96 lg:w-1/2 bg-red w-full " />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-bold text-[#36A5BF] lg:text-[18px] ">
            Resultado
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#fff] lg:text-[42px] lg:leading-[58px]">
            AR Movita
          </h1>
          {/* <Model className="flex justify-center items-center h-96 lg:h-screen lg:w-1/2 bg-red w-full sm:hidden" /> */}
          <p className="py-[24px] text-[#fff] lg:text-[18px]">
            O movita utiliza da realidade aumentada para melhor visualização do
            móvel planejado na sua casa
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#fff]">
              <span>
                <AiOutlineCheck />
              </span>
              Visualizar o móvel planejado apenas com a câmera do celular
            </li>
            <li className="flex items-center gap-x-2 text-[#fff]">
              <span>
                <AiOutlineCheck />
              </span>
              Verificar as medidas reais do móvel planejado
            </li>
            <li className="flex items-center gap-x-2 text-[#fff]">
              <span>
                <AiOutlineCheck />
              </span>
              Rotacionar o móvel planejado
            </li>
            <li className="flex items-center gap-x-2 text-[#fff]">
              <span>
                <AiOutlineCheck />
              </span>
              Aumentar e diminuir as medidas do móvel planejado
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
