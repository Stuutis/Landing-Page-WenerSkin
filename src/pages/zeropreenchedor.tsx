import { RoundedButton } from "../components/roundedButton";
import fotonaLogo from "../assets/FotonaLogo.png";

export function Zeropreenchedor() {
  return (
    <div>
      <aside className=" text-white h-[90vh] relative">
        <span className="bg-black opacity-60 absolute z-[5] h-[90vh] w-full"></span>
        <div className="bg-clodoaldobg bg-center flex flex-col justify-between items-center h-full ">
          <h1 className="text-3xl mt-20 z-10 font-bold">@zero_preenchedor</h1>
          <p
            className="flex gap-1 font-bold text-2xl flex-wrap items-center justify-center z-10 mt-40
          "
          >
            Aprenda o método <p className="text-red-700">Wenerskin</p> com o Dr
            Clodoaldo de Oliveira
          </p>
          <div className="flex flex-col items-center justify-center w-full z-10 gap-4">
            <RoundedButton />
            <img src={fotonaLogo} alt="" />
            <div className="bg-red-600 flex text-sm w-full py-4 text-nowrap gap-2 overflow-hidden animate-pulse items-center justify-center font-bold ">
              <p>+15 mil casos realizados</p>
              <p>+15 mil casos realizados</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
