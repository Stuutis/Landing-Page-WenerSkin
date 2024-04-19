interface AboutImagePorps {
  image: string;
  laser?: boolean;
}

export function AboutImage({ image, laser }: AboutImagePorps) {
  return (
    <img
      className={
        laser
          ? "w-1/ h-36 my-4 md:w-2/5   lg:w-1/2 lg:max-h-[205px]"
          : "h-40 md:w-full lg:min-h-[205px] lg:min-w-[137px] rounded-lg"
      }
      src={image}
      alt=""
    />
  );
}
