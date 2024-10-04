import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { Trash } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface CartProductProps {
  product: Product;
}

const CartProduct: FC<CartProductProps> = ({ product }) => {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  return (
    <div className="md:max-w-[420px] h-fit flex gap-4 rounded-2xl bg-background-light">
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
        <p className="text-base font-semibold">${product.price}</p>
        <Button variant="destructive" size="icon">
          <Trash strokeWidth="1.5" className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
