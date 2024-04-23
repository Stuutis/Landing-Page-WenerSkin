import { ComponentProps } from "react";

interface Divulgation extends ComponentProps<"img"> {
  image: string;
  title: string;
  text: string;
}

export function Divulgation({ image, title, text, ...props }: Divulgation) {
  return (
    <div className="flex flex-col max-w-64 gap-4 items-center z-10">
      <img
        {...props}
        className="w-full max-w-64 max-h-64 rounded-2xl md:w-full md:h-1/2"
        src={image}
        alt=""
      />
      <h1 className="text-center text-3xl sm:text-4xl xl:text-5xl">{title}</h1>
      <p
        className="text-wrap text-center text-lg
      sm:text-xl xl:text-xl"
      >
        {text}
      </p>
    </div>
  );
}
