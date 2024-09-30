"use client";

import useGetSingleProduct from "@/api/useGetSingleProduct";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import { Product } from "@/types/product";
import { TResponse } from "@/types/response";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const { productSlug } = params;

  const { error, loading, result }: TResponse =
    useGetSingleProduct(productSlug);

  if (loading || error) {
    return (
      <MaxWidthContainer>
        <div>Loading...</div>
      </MaxWidthContainer>
    );
  } else {
    const { name, description, images, price, salePrice }: Product = result[0];

    return (
      <MaxWidthContainer>
        <div>
          <p>{name}</p>
        </div>
      </MaxWidthContainer>
    );
  }
};

export default Page;
