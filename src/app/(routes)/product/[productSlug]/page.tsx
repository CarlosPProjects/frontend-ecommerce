"use client";

import useGetSingleProduct from "@/api/useGetSingleProduct";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import { Product } from "@/types/product";
import { TResponse } from "@/types/response";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import InfoProduct from "./components/info-product";

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
    const { name, images }: Product = result[0];

    return (
      <>
        <MaxWidthContainer className="bg-background-light">
          <div className="py-5 text-sm">
            <Link href="/" className="font-semibold">
              Inicio
            </Link>{" "}
            / {name}
          </div>
        </MaxWidthContainer>
        <MaxWidthContainer className="mt-4 mb-12 md:my-20">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="max-w-[500px] flex-1">
              <Image
                src={url + images[0].formats.medium.url}
                alt={name}
                width={500}
                height={500}
                className="w-full h-[300px] md:h-[500px] object-cover object-center rounded-xl"
              />
            </div>
            <InfoProduct product={result[0]} />
          </div>
        </MaxWidthContainer>
      </>
    );
  }
};

export default Page;
