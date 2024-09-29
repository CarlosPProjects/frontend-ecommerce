"use client";

import MaxWidthContainer from "@/components/MaxWidthContainer";
import ListProducts from "@/components/product/ListProducts";
import { cleanParam } from "@/lib/utils";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const { categorySlug } = params;

  const newName = cleanParam(categorySlug);

  return (
    <MaxWidthContainer className="my-20">
      <div className="flex flex-col gap-12">
        <h1 className="capitalize text-[28px] sm:text-[32px] font-semibold leading-tight">
          {newName}
        </h1>
        <ListProducts slug={categorySlug} />
      </div>
    </MaxWidthContainer>
  );
};

export default Page;
