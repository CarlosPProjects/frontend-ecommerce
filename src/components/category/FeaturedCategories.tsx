"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardCategory from "./CardCategory";
import useGetProductCategories from "@/api/useGetProductCategories";
import { TResponse } from "@/types/response";
import { Category } from "@/types/category";
import CardCategorySkeleton from "./CardCategorySkeleton";

const FeaturedCategories = () => {
  const { error, loading, result }: TResponse = useGetProductCategories();

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {loading || error
          ? Array(3)
              .fill(null)
              .map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <CardCategorySkeleton key={index} />
                </CarouselItem>
              ))
          : result.map((data: Category) => (
              <CarouselItem
                key={data.name}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <CardCategory
                  name={data.name}
                  featuredImage={data.minimage?.formats.medium.url}
                />
              </CarouselItem>
            ))}
      </CarouselContent>
      <CarouselPrevious className="-top-[64px] left-full -translate-x-20 md:-translate-x-24" />
      <CarouselNext className="-top-[64px] right-0" />
    </Carousel>
  );
};

export default FeaturedCategories;
