import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types/product";
import { ShoppingCart } from "lucide-react";
import React from "react";

export type InfoProductProps = {
  product: Product;
};

const InfoProduct = (props: InfoProductProps) => {
  const { product } = props;

  const { addItem } = useCart();

  return (
    <div className="flex-1 w-full max-w-[500px] space-y-4">
      <h1 className="text-[28px] sm:text-[32px] font-semibold leading-tight">
        {product.name}
      </h1>
      <p>{product.description}</p>
      <p className="text-xl md:text-2xl font-bold pb-4">{product.price}€</p>
      <Button onClick={() => addItem(product)}>
        <span className="text-base font-semibold leading-tight mr-5 ">
          Add to cart
        </span>
        <ShoppingCart className="w-6 h-6 group-hover:translate-x-1 transition" />
      </Button>
    </div>
  );
};

export default InfoProduct;
