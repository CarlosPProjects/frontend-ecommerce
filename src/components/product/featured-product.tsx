"use client";

import useGetFeaturedProducts from "@/app/api/useGetFeaturedProducts";
import { TResponse } from "@/types/response";
import CardProduct from "./CardProduct";
import { Product } from "@/types/product";

const FeatureProduct = () => {
  const { loading, result }: TResponse = useGetFeaturedProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {loading ? (
        <p>Loading</p>
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

export default FeatureProduct;
