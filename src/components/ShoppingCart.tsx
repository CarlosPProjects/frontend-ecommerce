"use client";

import { useCart } from "@/hooks/use-cart";
import { ShoppingCart } from "lucide-react";

const ShopCart = () => {
  const cart = useCart();

  return (
    <div className="rounded-lg bg-white p-[11px] hover:bg-accent duration-300 group relative">
      <ShoppingCart
        strokeWidth="1.5"
        className="w-[22px] h-[22px] group-hover:text-white transition"
      />

      {cart.items.length > 0 && (
        <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-primary text-background">
          {cart.items.length}
        </span>
      )}
    </div>
  );
};

export default ShopCart;
