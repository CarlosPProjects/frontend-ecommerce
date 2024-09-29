"use client";

import MaxWidthContainer from "@/components/MaxWidthContainer";
import ListProducts from "@/components/product/ListProducts";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const { categorySlug } = params;

  return (
    <MaxWidthContainer className="my-20">
      <div className="flex flex-col gap-12">
        <h1 className="text-[28px] sm:text-[32px] font-semibold leading-tight">
          {categorySlug}
        </h1>
        <ListProducts slug={categorySlug} />
      </div>
    </MaxWidthContainer>
  );
};

export default Page;
