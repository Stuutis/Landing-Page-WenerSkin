import { Button } from "./button";

interface BatchesProps {
  batche: string;
  date: string;
  actived?: boolean;
  disabled?: boolean;
}

export function Batches({ batche, date, actived, disabled }: BatchesProps) {
  return (
    <div className="flex justify-start items-center gap-7 py-4 lg:gap-12  xl:gap-20  z-10">
      <div className="flex flex-col items-left justify-center">
        <p
          className={
            actived
              ? "text-bold text-green-400 text-xl xl:text-3xl"
              : disabled
              ? "text-red-700"
              : "text-bold text-sky-700 text-lg"
          }
        >
          {batche}
        </p>
        <p className="text-lg xl:text-2xl">{date}</p>
      </div>
      {disabled ? (
        <p className="text-red-700 font-bold ml-10">Lote esgotado</p>
      ) : (
        ""
      )}
      {actived ? <Button /> : ""}
    </div>
  );
}
