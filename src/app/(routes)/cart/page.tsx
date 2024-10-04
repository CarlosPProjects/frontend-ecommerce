"use client";

import MaxWidthContainer from "@/components/MaxWidthContainer";
import { useCart } from "@/hooks/use-cart";
import React from "react";
import CartProduct from "./components/cart-product";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "@/api/payments";

const Cart = () => {
  const cart = useCart();

  const subtotal = cart.items.reduce(
    (acc: number, item: Product) => acc + item.price,
    0
  );

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY || ""
  );

  const buyStripe = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cart.items,
      });

      await stripe?.redirectToCheckout({
        sessionId: res.data.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MaxWidthContainer className="my-20">
      <div className="flex flex-col gap-12">
        <h1 className="text-[28px] sm:text-[32px] font-semibold leading-tight">
          Cart
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 grid grid-cols-1 gap-4 h-fit">
            {cart.items.length > 0 ? (
              cart.items.map((item: Product) => (
                <CartProduct key={item.id} product={item} />
              ))
            ) : (
              <div className="space-y-4">
                <h3 className="text-[18px] font-semibold leading-tight">
                  No items in cart
                </h3>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 flex-1 h-fit bg-background-light p-8 rounded-2xl">
            <h3 className="text-[18px] font-semibold leading-tight">
              Order Summary
            </h3>
            <div className="flex justify-between">
              Subtotal: <span className="font-semibold">{subtotal}€</span>
            </div>
            <Button
              onClick={buyStripe}
              disabled={cart.items.length > 0 ? false : true}
            >
              Complete Order
            </Button>
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default Cart;
