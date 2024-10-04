"use client";

import useGetFeaturedProducts from "@/api/useGetFeaturedProducts";
import { TResponse } from "@/types/response";
import CardProduct from "./CardProduct";
import { Product } from "@/types/product";
import CardProductSkeleton from "./CardProductSkeleton";
import { useCart } from "@/hooks/use-cart";

const FeatureProducts = () => {
  const { error, loading, result }: TResponse = useGetFeaturedProducts();

  const { items } = useCart();

  console.log(items);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
      {loading || error
        ? Array(4)
            .fill(null)
            .map((_, index) => <CardProductSkeleton key={index} />)
        : result?.map((data: Product) => (
            <CardProduct key={data.slug} product={data} />
          ))}
    </div>
  );
};

export default FeatureProducts;
