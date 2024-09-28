import MaxWidthContainer from "@/components/MaxWidthContainer";
import FeatureProduct from "@/components/product/featured-product";
import { Button } from "@/components/ui/button";
import { ArrowBigRight, MoveRightIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="flex items-center max-w-[1740px] mx-auto bg-background-light min-h-[850px] rounded-bl-[48px] rounded-br-[48px]">
        <MaxWidthContainer>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2 max-w-[632px]">
              <span className="uppercase text-sm tracking-wider">
                Welcome to chairy
              </span>
              <h1 className="font-bold text-[68px] leading-tight capitalize">
                Best Furniture Collection for your interior.
              </h1>
              <Button className="w-fit group mt-4">
                <span className="text-base font-semibold leading-tight mr-5 ">
                  Shop Now
                </span>
                <MoveRightIcon className="w-6 h-6 group-hover:translate-x-1 transition" />
              </Button>
            </div>
          </div>
        </MaxWidthContainer>
      </main>
    </>
  );
}
