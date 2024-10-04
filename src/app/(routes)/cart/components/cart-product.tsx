"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types/product";
import { Trash } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface CartProductProps {
  product: Product;
}

const CartProduct: FC<CartProductProps> = ({ product }) => {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { removeItem } = useCart();

  return (
    <div className="md:max-w-[420px] h-fit flex gap-4 rounded-2xl border border-border">
      <div className="flex-1 relative">
        <Image
          src={url + product.images[0].formats.medium.url}
          alt={product.name}
          fill
          className="w-[150px] object-cover object-center rounded-s-2xl"
        />
      </div>
      <div className="flex flex-1 justify-between flex-col gap-4 p-4">
        <p className="font-medium">{product.name}</p>
        <p className="text-base font-semibold">{product.price}€</p>
        <Button
          onClick={() => removeItem(product.id)}
          variant="destructive"
          size="icon"
        >
          <Trash strokeWidth="1.5" className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
