import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";
import { Product } from "@/types/product";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";

interface CardProductProps {
  product: Product;
}

const CardProduct: FC<CardProductProps> = ({ product }) => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

  const { slug, name, price, images } = product;

  const { addItem } = useCart();

  return (
    <div className="flex flex-col gap-4 group/general">
      <div className="relative w-full min-h-[312px] bg-no-repeat bg-center">
        <Image
          src={`${backendUrl}${images[0].formats.medium.url}`}
          alt={name}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex justify-between gap-3">
        <div>
          <Link
            href={`${frontendUrl}/product/${slug}`}
            className="text-base leading-tight group-hover/general:text-accent mb-[10px] transition"
          >
            {name}
          </Link>
          <p className="text-lg leading-tight font-semibold">{price}€</p>
        </div>
        <Button
          size="icon"
          className="rounded-lg p-[10px] bg-background-light hover:bg-accent duration-300 group/btn"
          onClick={() => addItem(product)}
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
