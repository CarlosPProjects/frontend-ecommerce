"use client";

import useGetSingleProduct from "@/api/useGetSingleProduct";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { TResponse } from "@/types/response";
import { MoveRightIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const { productSlug } = params;

  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { error, loading, result }: TResponse =
    useGetSingleProduct(productSlug);

  if (loading || error) {
    return (
      <MaxWidthContainer className="my-20">
        <div>Loading...</div>
      </MaxWidthContainer>
    );
  } else {
    const { name, description, images, price, salePrice }: Product = result[0];

    return (
      <>
        <MaxWidthContainer className="bg-background-light">
          <div className="py-4  ">
            <Link href="/" className="font-semibold">
              Inicio
            </Link>{" "}
            / {name}
          </div>
        </MaxWidthContainer>
        <MaxWidthContainer className="my-20">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="">
              <div className="w-[500px] h-[500px] relative bg-no-repeat bg-cover bg-center">
                <Image
                  src={url + images[0].formats.medium.url}
                  alt={name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="w-full max-w-[500px] space-y-4">
              <h1 className="text-[28px] sm:text-[32px] font-semibold leading-tight">
                {name}
              </h1>
              <p>{description}</p>
              <p className="text-xl md:text-2xl font-bold pb-4">${price} </p>
              <Button>
                <span className="text-base font-semibold leading-tight mr-5 ">
                  Add to cart
                </span>
                <ShoppingCart className="w-6 h-6 group-hover:translate-x-1 transition" />
              </Button>
            </div>
          </div>
        </MaxWidthContainer>
      </>
    );
  }
};

export default Page;
