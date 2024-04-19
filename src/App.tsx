import ClodoaldoImgage from "./assets/ClodoaldoImage.jpg";
import InstagramLogo from "./assets/InstagramLogo.png";
import WhatsAppLogo from "./assets/WhatsAppLogo.png";
import FotonaLogo from "./assets/FotonaLogo.png";
import LaserImage from "./assets/LaserImage.png";
import Laser from "./assets/Laser.png";
import LaserY from "./assets/LaserY.png";
import BlueFlash from "./assets/BlueFlash.png";
import BlueFlashSM from "./assets/BlueFlashSM.png";
import blueLightFlash from "./assets/BlueLightFlash.png";
import sobre1 from "./assets/sobre1.jpg";
import sobre2 from "./assets/sobre2.jpg";
import sobre3 from "./assets/sobre3.png";
import sobre4 from "./assets/sobre4.png";
import sobre5 from "./assets/sobre5.jpg";
import sobre6 from "./assets/sobre6.png";
import fotonaLaserGif from "./assets/fotonalaser.gif";
import clodoaldoEntrevista from "./assets/clodoaldoEntrevista.gif";
import resultados from "./assets/resultados.jpg";
import edificoMurano from "./assets/edificioMurano.jpg";
import laserPro from "./assets/laserPro.jpg";
import verticalBlueFlash from "./assets/verticalBlueFlash.png";
import clodoaldo from "./assets/clodoaldo.jpg";

import { Button } from "./components/button";
import { Calendar } from "./components/calendar";
import { Location } from "./components/location";
import { Divulgation } from "./components/divulgation";
import { Batches } from "./components/batches";
import { AboutImage } from "./components/aboutImage";

interface App {
  ClodoaldoImg: string;
}

export function App() {
  return (
    <div
      className="bg-black text-gray-50 flex flex-col items-center overflow-x-hidden
    "
    >
      <article className="pt-10  h-[90vh] bg-black flex flex-col relative md:h-[70vh] md:flex-row  md:px-20 lg:gap-20  ">
        <img
          className="absolute z-0
          top-44 -left-40
          md:-left-40 md:top-44
          lg:-left-80 lg:bottom-24 "
          src={BlueFlash}
          alt=""
        />
        <img
          className="absolute h-96 -top-40 -left-36                    
          lg:-left-64 lg:-top-40   "
          src={blueLightFlash}
          alt=""
        />

        <div className="flex flex-col items-center lg:mt-14">
          <nav
            className="
          text-2xl
          flex lg:gap-14 items-center justify-center z-10  "
          >
            {/* <a className="cursor-pointer font-bold hover:text-sky-400" href="">
              SOBRE
            </a> */}
            <div className="flex items-center gap-1 justify-center  ">
              <img className="size-9" src={WhatsAppLogo} alt="" />
              <a
                className="underline font-bold lg:text-2xl  hover:text-sky-400  "
                target="_blank"
                href="https://wa.me/message/43YZB3COQS5IG1"
              >
                RESERVE SUA VAGA
              </a>
            </div>
          </nav>

          <div className=" justify-center items-center flex flex-col mt-6 gap-5 lg:w-96 lg:gap-5 lg:mt-20">
            <h1
              className="text-6xl
              lg:text-7xl font-bold"
            >
              MÉTODO
            </h1>
            <h1
              className="text-4xl             
              lg:text-5xl"
            >
              WENER SKIN®
            </h1>
          </div>

          <div
            className="px-4 my-5 font-bold flex items-center text-xl
          lg:mt-10 lg:text-3xl"
          >
            <p>2 DIAS DE</p>
            <div>
              <img className="w-28 lg:w-36 " src={Laser} alt="" />
            </div>
            <p>IMERSÃO</p>
          </div>
          <h3 className="italic text-right text-lg lg:mt-16 lg:pl-32 lg:text-xl ">
            DR CLODOALDO DE OLIVEIRA
          </h3>
        </div>

        <aside className="xl:ml-16 flex  ">
          <div className="relative mt-10 ml-8">
            <img
              className="
              absolute -right-32 -top-28

              xl:-right-44 xl:-top-24 xl:h-80 z-0
              "
              src={BlueFlashSM}
              alt=""
            />
            <img
              className="opacity-0              
              lg:h-screen absolute lg:-left-16 lg:-top-28 lg:opacity-100"
              src={LaserY}
              alt=""
            />

            <img
              className="
              h-96 z-[2] border-2 border-cyan-200 rounded-lg
              lg:w-[500px] lg:h-full lg:rounded-xl lg:border-none"
              src={ClodoaldoImgage}
              alt="foto do Doutor Clodoaldo de Oliveira"
            />
            <div
              className="absolute bottom-0 -right-52            
            lg:bottom-0 lg:-right-36"
            >
              <img
                className="opacity-90 size-2/5
                lg:size-4/5"
                src={LaserImage}
                alt=""
              />
              <img
                className="absolute z-10 w-20 -bottom-4 left-6
                lg:w-32 lg:-bottom-8 lg:right-20"
                src={FotonaLogo}
                alt=""
              />
            </div>
            <div
              className="absolute rotate-90 flex flex-row justify-center items-center top-32 -right-32  gap-2            
              xl:top-44 xl:-right-32"
            >
              <img className="size-8 z-10" src={InstagramLogo} alt="" />
              <a
                className="underline text-zinc-200 font-bold"
                target="_blank"
                href="https://www.instagram.com/zero_preenchedor?igsh=MTQ1bXBpc2p4ZDZyYQ=="
              >
                ZERO_PREENCHEDOR
              </a>
            </div>
          </div>
        </aside>
      </article>
      {/* 2 seção */}

      <article
        className=" relative flex  flex-col items-center justify-center bg-zinc-900 py-10 w-full
        xl:px-20 xl:pb-20   "
      >
        <img
          className="absolute -top-32 -left-40  z-0 
          sm:-left-64 
          md:left-64
          md:-top-40
          lg:left-[1000px]
          2xl:left-[1300px]
           "
          src={BlueFlash}
          alt=""
        />
        <img
          className="absolute bottom-0 left-4 md:w-24 md:h-20 md:-bottom-10 xl:bottom-10"
          src={FotonaLogo}
          alt=""
        />
        <div className="flex justify-center mb-10 z-10 lg:w-full lg:gap-40  lg:py-10 ">
          <a
            className="cursor-pointer underline flex text-sm   items-center z-10hover:text-sky-400 gap-2 lg:text-xl 
            "
            target="_blank"
            href="https://www.instagram.com/zero_preenchedor?igsh=MTQ1bXBpc2p4ZDZyYQ=="
          >
            <img className="size-8 " src={InstagramLogo} alt="" />
            ZERO_PREENCHEDOR
          </a>
          <a
            className="flex items-center underline text-sm  hover:text-sky-400 xl:gap-2 lg:text-2xl"
            target="_blank"
            href="https://wa.me/message/43YZB3COQS5IG1"
          >
            <img className="size-9" src={WhatsAppLogo} alt="" />
            RESERVE SUA VAGA
          </a>
        </div>

        <div className="flex flex-col items-center md:flex-row z-10">
          <div className="flex flex-col items-center gap-4 mb-4 md:gap-6 md:pl-20">
            <h1 className="text-4xl md:text-6xl">WENER SKIN®</h1>
            <ul className="flex flex-col list-disc gap-2 text-md md:text-xl">
              <li>MAIS DE 15 MIL CASOS DE SUCESSO</li>
              <li>ALTO ÍNDICE DE SATISFAÇÃO</li>
              <li>MÉTODO 100% NÃO INVASIVO</li>
              <li className="text-wrap break-words">
                DR CLODOALDO CONTA COM <br />
                MAIS DE 27 ANOS DE <br />
                EXPERIÊNCIA NA ÁREA
              </li>
            </ul>
          </div>
          <div className="w-full">
            <div
              className="flex gap-4
            md:grid md:grid-cols-3 md:gap-10  md:mr-10 "
            >
              <AboutImage image={sobre1} />
              <AboutImage image={sobre2} />
              <AboutImage image={sobre3} />
            </div>
            <div className="flex flex-col items-center pb-10 md:pb-0 md:flex-row md:mt-5 ">
              <AboutImage laser image={sobre6} />
              <div className="flex gap-2 md:grid md:grid-cols-2 md:gap-7">
                <AboutImage image={sobre4} />
                <AboutImage image={sobre5} />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 3 seção */}

      <article
        className=" flex flex-col justify-center items-center md:py-10 relative
      "
      >
        <div
          className="z-0 absolute -top-24 w-96   
          md:w-full md:-top-52"
        >
          <img src={blueLightFlash} alt="" />
        </div>
        <div className="flex flex-col py-5 gap-5 xl:py-0 md:grid md:grid-cols-3 md:gap-10 md:px-10">
          <Divulgation
            image={resultados}
            title={"Resultados reais"}
            text="Resultados obtidos após o método Wenerskin (sem nenhuma técnica de edição)"
          />
          <img
            className="absolute top-44 -left-20 z-0 sm:left-20 md:opacity-0"
            src={BlueFlashSM}
            alt=""
          />
          <Divulgation
            image={fotonaLaserGif}
            title={"Tecnologia Eslovêna"}
            text="Os segredos laser de melhor performance do mundo"
          />
          <img
            className="absolute top-[1200px] -right-10 z-0 md:opacity-0"
            src={BlueFlashSM}
            alt=""
          />
          <Divulgation
            image={clodoaldoEntrevista}
            title={"Sucesso de carreira"}
            text="Dr Clodoaldo conta com mais de 15 mil casos de Fotona realizados e palestrante nacional e internacional"
          />
        </div>
        <Button />

        <div className="relative flex flex-col justify-end items-end w-screen xl:w-full  ">
          <div
            className="absolute size-20 right-16 -bottom-24
           xl:-right-16 xl:-bottom-4"
          >
            <div className="flex xl:gap-1">
              <p className="font-bold text-lg">WENER</p>
              <p className="text-lg">SKIN®</p>
            </div>
            <img className="xl:w-24 " src={FotonaLogo} alt="" />
          </div>
        </div>
      </article>

      <article className="pt-32 relative flex flex-col justify-between md:flex-row  md:px-10 xl:gap-40 xl:py-10 ">
        <img
          className="absolute -top-20 -left-28 sm:-top-40 sm:-left-52 xl:-top-72 xl:-left-80 z-0"
          src={BlueFlash}
          alt=""
        />
        <div>
          <div className="flex flex-col gap-4 pl-4 text-left items-center sm:items-start xl:items-start">
            <h1
              className="text-center text-4xl 
            sm:text-6xl
            xl:text-6xl font-bold xl:mb-10 z-10"
            >
              Detalhes <br />
              do curso
            </h1>
            <div className=" flex gap-4 items-center font-bold text-lg  xl:items-start">
              <Calendar />
              <p>09/06/2024 e 10/06/2024</p>
            </div>
            <div className="flex gap-4 items-center   md:gap-8 xl:mb-10">
              <Location />
              <div className="font-bold text-xl">
                <p className="text-blue-500 font-bold">Localização</p>
                <p>
                  Edifício Murano na Alameda Grajaú B 129 <br />
                  Alphaville - Barueri- SP
                </p>
              </div>
            </div>
            <Button />
          </div>
        </div>
        <div className="flex items-center justify-center py-10 xl:py-0 ">
          <img
            className="w-3/4 outline outline-offset-2 outline-2 outline-cyan-300 rounded-md  xl:h-full xl:w-96
         "
            src={edificoMurano}
            alt=""
          />
        </div>
      </article>

      <div className="flex justify-start items-center text-xl  xl:ml-60">
        <p className="font-bold sm:ml-4">WENER</p>
        <p>SKIN®</p>
        <img className="xl:w-3/4" src={Laser} alt="" />
      </div>

      <article
        className="flex flex-col items-center justify-center relative bg-zinc-900 w-full pt-10
      md:flex-row xl:gap-8 xl:py-20 xl:px-20 xl:mb-10 "
      >
        <img
          className="absolute -top-20 
          md:-top-48
          xl:-top-80 xl:-left-[520px] z-0"
          src={blueLightFlash}
          alt=""
        />

        <div className="z-10 flex flex-col justify-center items-center">
          <h1 className="text-center text-4xl mb-10 xl:text-6xl ">Tópicos</h1>
          <img className="rounded-lg w-2/3" src={laserPro} alt="" />
        </div>
        <div>
          <ul className="my-4 list-decimal flex ml-8 text-clip flex-col gap-2 text-xl xl:text-3xl">
            <li>Introdução/ o que é o laser</li>
            <li>Cuidados pré laser</li>
            <li>Diferença de ponteiras/ aplicações</li>
            <li>Diferentes tons de pele/ desafios</li>
            <li>Cuidados pós laser</li>
            <li>Smooth eyes/ olhos</li>
            <li>Cicatriz de acne</li>
            <li>Melasma</li>
            <li>Pele com envelhecimento acentuado</li>
            <li>Intercorrências</li>
          </ul>
        </div>
      </article>

      <article className="pt-10 pb-10 xl:pt-0">
        <div className=" flex flex-col relative justify-center px-10 md:flex-row md:px-10 md:gap-10 xl:gap-20  xl:py-20 ">
          <div className="grid grid-cols-1 divide-y-reverse divide-y-2 relative">
            <img
              className="absolute h-96 -top-8 -left-10
              md:-left-14 md:h-full
              xl:h-full  xl:-left-24"
              src={verticalBlueFlash}
              alt=""
            />
            <Batches actived batche="Primeiro lote" date="Até 09/04/24" />
            <Batches batche="Segundo lote" date="Até 15/05/24" />
            <Batches batche="Terceiro lote" date="Até 16/05/24" />
          </div>

          <img
            className=" mx-auto mt-4 border-2 h-1/2 w-2/3 md:w-1/2 md:h-1/2 xl:mt-0 xl:h-1/3 xl:w-2/6"
            src={clodoaldo}
            alt=""
          />
        </div>
        <div className="mt-4 flex justify-between items-center gap-1 ">
          <div className="flex gap-1 text-3xl">
            <p className="font-bold ">WENER</p>
            <p>SKIN®</p>
          </div>
          <img src={FotonaLogo} alt="" />
        </div>
      </article>
    </div>
  );
}

export default App;
