import MaxWidthContainer from "@/components/MaxWidthContainer";
import FeatureProduct from "@/components/product/featured-product";
import { Button } from "@/components/ui/button";
import { ArrowBigRight, MoveRightIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden flex items-center max-w-[1740px] mx-auto bg-background-light lg:min-h-[850px] rounded-bl-[48px] rounded-br-[48px] py-8">
        {/* Hero Section */}
        <MaxWidthContainer className="z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-14">
            <div className="flex flex-col gap-2 max-w-[632px] mt-16">
              <span className="uppercase text-sm tracking-wider">
                Welcome to chairy
              </span>
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-tight capitalize">
                Best Furniture Collection for your interior.
              </h1>
              <Button className="w-fit group mt-4">
                <span className="text-base font-semibold leading-tight mr-5 ">
                  Shop Now
                </span>
                <MoveRightIcon className="w-6 h-6 group-hover:translate-x-1 transition" />
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/assets/featured-hero-product.png"
                alt="featured wooden chair"
                width={475}
                height={649}
              />
              <div className="absolute w-[750px] h-[750px] bg-[#E1E3E5] rounded-full -z-10 inset-1/2 lg:-inset-1/4 lg:-translate-y-64 place-self-center lg:place-self-end"></div>
            </div>
          </div>
        </MaxWidthContainer>
      </main>
    </>
  );
}
