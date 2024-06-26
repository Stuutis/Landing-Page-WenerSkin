import { RoundedButton } from "../components/roundedButton";

import fotonaLogo from "../assets/FotonaLogo.png";
import yellowFlash from "../assets/yellowFlash.png";
import clodoaldo from "../assets/clodoaldo.jpg";
import { WenerskinLogo } from "../components/wenerskinlogo";
import { Batches } from "../components/batches";
import { Calendar } from "../assets/svg/calendar";
import { RedLocation } from "../assets/svg/redLocation";
import flashLights from "../assets/flashLights.png";
import { TextMedicineLogo } from "../components/textMedicineLogo";

export function Zeropreenchedor() {
  return (
    <div className=" bg-black text-white overflow-x-hidden font-body">
      <aside className="  h-[90vh] relative">
        <span className="bg-black opacity-60 absolute z-[5] h-[90vh] w-full "></span>
        <div className="bg-clodoaldobg bg-center flex flex-col justify-between items-center h-full">
          <a
            target="_blank"
            href="https://www.instagram.com/zero_preenchedor?igsh=MTQ1bXBpc2p4ZDZyYQ=="
            className="text-3xl mt-20 z-10 font-bold"
          >
            @zero_preenchedor
          </a>
          <p
            className="flex gap-1 font-bold text-2xl flex-wrap items-center justify-center z-10 mt-40 text-center lg:text-4xl
          "
          >
            Aprenda o método <span className="text-red-700">Wenerskin</span> com
            o Dr Clodoaldo de Oliveira
          </p>
          <div className="flex flex-col items-center justify-center w-full z-10 gap-4">
            <RoundedButton />
            <img src={fotonaLogo} alt="" />
            <div className="bg-red-600 flex text-sm w-full py-4 text-nowrap gap-2 overflow-hidden animate-pulse items-center justify-center font-bold lg:text-2xl">
              <p>+15 mil casos realizados</p>
              <p>+15 mil casos realizados</p>
            </div>
          </div>
        </div>
      </aside>

      <aside className="bg-black py-10 px-5 lg:flex lg:flex-col lg:justify-center lg:items-center ">
        <div className="flex flex-col gap-5 ">
          <div className="lg:flex lg:justify-center lg:items-center lg:gap-10 lg:px-40 ">
            <div>
              <h1 className="font-bold text-2xl ">
                Médico, vou te contar o segredo do meu sucesso:
              </h1>
              <div className="flex items-end justify-center my-10 lg:w-11/12 ">
                <RoundedButton />
              </div>
              <WenerskinLogo />
            </div>
            <div>
              <div className="relative flex flex-col gap-10 text-xl text-left mt-10">
                <TextMedicineLogo
                  hasLogo
                  text="Resultados com alto índice de satisfação"
                />
                <TextMedicineLogo
                  text="Como diminuir ou abolir o uso de toxína no seu paciente"
                  hasLogo
                />
                <TextMedicineLogo
                  text="Lucratividade como nenhum outro"
                  hasLogo
                />
                <img
                  className="absolute bottom-0 -right-20 opacity-50 h-full"
                  src={yellowFlash}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center  md:flex-row lg:gap-3 lg:px-10 2xl:justify-center">
            <img
              className="rounded-lg sm:w-1/2 lg:ml-20 md:h-1/2 md:w-1/2  lg:w-1/3 2xl:h-[60vh] "
              src={clodoaldo}
              alt=""
            />

            <div className="mt-5 flex flex-col justify-center text-left text-zinc-100 bg-neutral-900 w-screen px-5 py-5 md:bg-transparent lg:pr-24 2xl:max-w-[60vw]">
              <WenerskinLogo />

              <p className="mt-2 font-bold text-2xl">
                Prazer, meu nome é Clodoaldo de Oliveira.
              </p>

              <br />

              <p>Eu tenho uma experiência de sucesso para te contar. </p>
              <br />
              <p>
                Com formação médica há mais de 27 anos, tenho observado o leque
                de recursos que temos na estética médica: preenchedores, fios de
                sustentação, tecnologias... e sempre procurei a melhor opção de
                benefício ao paciente.
              </p>
              <br />
              <p>
                Um novo horizonte se abriu quando desde 2016, comecei a fazer
                Laseres da marca Fotona.
              </p>
              <br />
              <p>
                {" "}
                Foram experiências com vários protocolos: Fotona 4D,
                EndoLifting, Endolaser, Skin Tightening, entre outros. Até que
                chegamos ao Wenerskin.
              </p>
              <br />
              <p>
                Nessa forma de aplicar, tivemos um índice de satisfação
                altissímo. Cada paciente indicavam mais 3, 4 ou 5 novos
                pacientes, até ultrapassarmos a marca de 15.000 casos feitos.
              </p>
              <br />
              <p>
                Colegas do Brasil todo queriam saber sobre o que eu fazia e
                porque os resultados aconteciam de forma natural, sem
                preenchedor ou toxina.
              </p>
              <br />
              <p>
                Foi então que pensei: Por que não ter 2 dias de imersào e passar
                a minha forma de tratar? E foi exatamente o que eu fiz:
              </p>
              <br />

              <p className="font-bold text-lg">
                Estão abertas as inscrições para os 2 dias de imersão e mentoria
                para te passar esse protocolo
              </p>
            </div>
          </div>
        </div>
      </aside>

      <footer className="md:grid grid-cols-3 relative w-screen mt-5">
        <div className=" grid grid-cols-1  w-screen divide-y-reverse relative px-10 md:col-span-2 lg:mt-10 lg:divide-y-0">
          <img
            className="absolute z-0 h-full w-full"
            src={flashLights}
            alt=""
          />
          <Batches actived batche="Lote 1" date="Até 09/04/24" />
          <Batches batche="Lote 2" date="Até 15/05/24" />
          <Batches batche="Lote 3" date="Após 16/05/24" />
        </div>

        <div
          className="bg-neutral-900 p-5 right-10 sm:absolute sm:bg-transparent flex flex-col gap-4 font-bold mt-6  bottom-0 md:justify-center 
           lg:-top-10 lg:text-md lg:text-left 2xl:text-xl "
        >
          <div className="flex items-center gap-4">
            <Calendar />
            <p>09/06/24 e 10/06/24</p>
          </div>
          <div className="flex items-center gap-8">
            <RedLocation />
            Edifício Murano na Alameda Grajaú 129 <br />
            Alphaville - Barueri - SP
          </div>
        </div>
      </footer>
    </div>
  );
}
