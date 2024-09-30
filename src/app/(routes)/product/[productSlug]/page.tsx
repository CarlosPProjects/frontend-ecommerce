"use client"

import useGetSingleProduct from "@/api/useGetSingleProduct";
import { useParams } from "next/navigation"

const Page = () => {
  const params = useParams();
  const { productSlug } = params;

  console.log(productSlug);

  const { loading, error, result } = useGetSingleProduct(productSlug);

  console.log(result);

  return (
    <div>Page</div>
  )
}

export default Page