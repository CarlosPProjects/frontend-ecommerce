import FeaturedCategories from "@/components/category/FeaturedCategories";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import OurBrands from "@/components/OurBrands";
import FeatureProducts from "@/components/product/FeaturedProducts";
import ListProducts from "@/components/product/ListProducts";
import { Button } from "@/components/ui/button";
import {
  Clock,
  MoveRightIcon,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden flex items-center max-w-[1740px] mx-auto bg-background-light lg:min-h-[850px] rounded-none lg:rounded-bl-[48px] lg:rounded-br-[48px] py-8">
        {/* Hero Section */}
        <MaxWidthContainer className="z-[1]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-14">
            <div className="flex flex-col gap-2 max-w-[632px] mt-16">
              <span className="uppercase text-sm tracking-wider">
                Welcome to chairy
              </span>
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-tight capitalize">
                Best Furniture Collection for your interior.
              </h1>
              <Button asChild className="w-fit group mt-4">
                <Link href="/shop">
                  <span className="text-base font-semibold leading-tight mr-5 ">
                    Shop Now
                  </span>
                  <MoveRightIcon className="w-6 h-6 group-hover:translate-x-1 transition" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/assets/featured-hero-product.png"
                alt="featured wooden chair"
                width={475}
                height={649}
              />
              <div className="absolute w-[750px] h-[750px] bg-[#E1E3E5] rounded-full -z-[1] inset-1/2 lg:-inset-1/4 lg:-translate-y-64 place-self-center lg:place-self-end"></div>
            </div>
          </div>
        </MaxWidthContainer>
      </main>
      {/* Faq bar */}
      <MaxWidthContainer className="lg:-translate-y-1/2">
        <div className="grid items-center grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-8 py-10 lg:py-12 rounded-xl bg-white lg:shadow-md">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
            <Package strokeWidth="1" className="w-11 h-11" />
            <div className="text-center md:text-start">
              <p className="text-lg leading-tight mb-[6px] font-medium">
                Discount
              </p>
              <p className="text-sm text-muted leading-tight">
                Every week new sales
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
            <Truck strokeWidth="1" className="w-11 h-11" />
            <div className="text-center md:text-start">
              <p className="text-lg leading-tight mb-[6px] font-medium">
                Free Delivery
              </p>
              <p className="text-sm text-muted leading-tight">
                100% Free for all orders
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
            <Clock strokeWidth="1" className="w-11 h-11" />
            <div className="text-center md:text-start">
              <p className="text-lg leading-tight mb-[6px] font-medium">
                Great Support 24/7
              </p>
              <p className="text-sm text-muted leading-tight">
                We care your experiences
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
            <ShieldCheck strokeWidth="1" className="w-11 h-11" />
            <div className="text-center md:text-start">
              <p className="text-lg leading-tight mb-[6px] font-medium">
                Secure Payment
              </p>
              <p className="text-sm text-muted leading-tight">
                100% Secure Payment Method
              </p>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
      {/* Our Brands */}
      <MaxWidthContainer>
        <OurBrands />
      </MaxWidthContainer>
      {/* Featured Products */}
      <MaxWidthContainer className="mt-8 mb-20">
        <div className="flex flex-col gap-12">
          <h2 className="text-[28px] sm:text-[32px] font-semibold leading-tight">
            Featured Products
          </h2>
          <FeatureProducts />
        </div>
      </MaxWidthContainer>
      {/* Categories */}
      <MaxWidthContainer className="mb-20">
        <div className="flex flex-col gap-12">
          <h2 className="text-[28px] sm:text-[32px] font-semibold leading-tight">
            Top categories
          </h2>
          <FeaturedCategories />
        </div>
      </MaxWidthContainer>
      {/* Our Products */}
      <MaxWidthContainer className="mb-20">
        <div className="flex flex-col gap-12">
          <h2 className="text-[28px] sm:text-[32px] font-semibold leading-tight">
            Our Products
          </h2>
          <ListProducts />
        </div>
      </MaxWidthContainer>
    </>
  );
}
