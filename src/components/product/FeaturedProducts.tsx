"use client";

import useGetFeaturedProducts from "@/app/api/useGetFeaturedProducts";
import { TResponse } from "@/types/response";
import CardProduct from "./CardProduct";
import { Product } from "@/types/product";
import CardProductSkeleton from "./CardProductSkeleton";

const FeatureProducts = () => {
  const { error, loading, result }: TResponse = useGetFeaturedProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {loading || error ? (
        Array(4).fill(null).map((_, index) => (
          <CardProductSkeleton key={index} />
        ))
      ) : (
        result?.map((data: Product) => (
          <CardProduct
            key={data.name}
            name={data.name}
            featuredImage={data.images[0].formats.medium.url}
            isNew={data.isNew}
            price={data.price}
            salePrice={data.salePrice}
          />
        ))
      )}
    </div>
  );
};

export default FeatureProducts;
