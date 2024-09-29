import MaxWidthContainer from "@/components/MaxWidthContainer";
import ListProducts from "@/components/product/ListProducts";
import React from "react";

const Page = () => {
  return (
    <MaxWidthContainer className="my-20">
      <div className="flex flex-col gap-12">
      <h1 className="text-[28px] sm:text-[32px] font-semibold leading-tight">
        Shop
      </h1>
      <ListProducts/>
      </div>
    </MaxWidthContainer>
  );
};

export default Page;
