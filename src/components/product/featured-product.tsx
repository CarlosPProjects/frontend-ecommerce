"use client";

import useGetFeaturedProducts from "@/app/api/useGetFeaturedProducts";
import { TResponse } from "@/types/response";

const FeatureProduct = () => {
  const { loading, result } :TResponse = useGetFeaturedProducts();

  return <div>FeatureProduct</div>;
};

export default FeatureProduct;
