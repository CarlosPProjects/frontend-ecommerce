import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";

interface CardProductProps {
  name: string;
  price: number;
  salePrice?: number;
  isNew: boolean;
  featuredImage: string;
}

const CardProduct: FC<CardProductProps> = ({
  name,
  price,
  salePrice,
  isNew,
  featuredImage,
}) => {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  return (
    <div className="flex flex-col gap-4 group/general">
      <div className="relative w-full min-h-[312px] bg-no-repeat bg-center">
        <Image
          src={`${url}${featuredImage}`}
          alt={name}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex justify-between gap-3">
        <div>
          <p className="text-base leading-tight group-hover/general:text-accent mb-[10px] transition">
            {name}
          </p>
          <p className="text-lg leading-tight font-semibold">${price}</p>
        </div>
        <Button
          size="icon"
          className="rounded-lg p-[10px] bg-background-light hover:bg-accent duration-300 group/btn"
        >
          <ShoppingCart
            strokeWidth="1.5"
            className="w-6 h-6 text-primary group-hover/btn:text-white"
          />
        </Button>
      </div>
    </div>
  );
};

export default CardProduct;
