import { MedicineLogo } from "../assets/svg/medicineLogo";

interface textMedicineLogoProps {
  text: string;
  hasLogo?: boolean;
}

export function TextMedicineLogo({ text, hasLogo }: textMedicineLogoProps) {
  return (
    <div className="flex gap-4 items-center">
      {hasLogo ? <MedicineLogo size="48" /> : ""}
      <p>{text}</p>
    </div>
  );
}
