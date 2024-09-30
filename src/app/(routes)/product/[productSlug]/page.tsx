"use client";

import useGetSingleProduct from "@/api/useGetSingleProduct";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import { Product } from "@/types/product";
import { TResponse } from "@/types/response";
import Image from "next/image";
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
          <div className="w-full max-w-[500px]">
            <h1 className="text-[28px] sm:text-[32px] font-semibold leading-tight">
              {name}
            </h1>
          </div>
        </div>
      </MaxWidthContainer>
    );
  }
};

export default Page;
