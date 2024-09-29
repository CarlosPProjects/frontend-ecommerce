import { cn } from "@/lib/utils";
import { FC } from "react";

interface CardCategoryProps {
  featuredImage: string;
  name: string;
}

const CardCategory: FC<CardCategoryProps> = ({ featuredImage, name }) => {

  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  return (
    <div
      style={{ backgroundImage: `url(${url}${featuredImage})` }}
      className={cn(
        `flex items-end w-full min-h-[312px] lg:min-h-[424px] rounded-xl bg-no-repeat bg-center bg-cover`
      )}
    >
      <div className="w-full bg-black/70 p-5 rounded-bl-xl rounded-br-xl">
        <p className="text-white text-xl font-semibold leading-tight mb-2">{name}</p>
        <p className="text-white/70 leading-tight">140</p>
      </div>
    </div>
  );
};

export default CardCategory;
