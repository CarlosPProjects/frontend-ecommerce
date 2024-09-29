"use client";

import useGetProducts from "@/api/useGetProducts";
import { Product } from "@/types/product";
import CardProductSkeleton from "./CardProductSkeleton";
import CardProduct from "./CardProduct";
import { TResponse } from "@/types/response";

const ListProducts = ({}) => {
  const { error, loading, result }: TResponse = useGetProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
      {loading || error
        ? Array(4)
            .fill(null)
            .map((_, index) => <CardProductSkeleton key={index} />)
        : result?.map((data: Product) => (
            <CardProduct
              key={data.name}
              name={data.name}
              featuredImage={data.images[0].formats.medium.url}
              isNew={data.isNew}
              price={data.price}
              salePrice={data.salePrice}
            />
          ))}
    </div>
  );
};

export default ListProducts;
