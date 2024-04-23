import { Button } from "./button";

interface BatchesProps {
  batche: string;
  date: string;
  actived?: boolean;
}

export function Batches({ batche, date, actived }: BatchesProps) {
  return (
    <div className="flex justify-start items-center gap-7 py-4 lg:gap-12  xl:gap-20  z-10">
      <div className="flex flex-col items-left justify-center">
        <p
          className={
            actived
              ? "text-bold text-green-400 text-xl xl:text-3xl"
              : "text-bold text-sky-700 text-lg"
          }
        >
          {batche}
        </p>
        <p className="text-lg xl:text-2xl">{date}</p>
      </div>
      {actived ? <Button /> : ""}
    </div>
  );
}
