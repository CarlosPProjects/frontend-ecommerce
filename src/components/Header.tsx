import Image from "next/image";
import MaxWidthContainer from "./MaxWidthContainer";
import TopBar from "./TopBar";
import { Heart, User } from "lucide-react";
import Link from "next/link";
import SearchInput from "./SearchInput";
import { Navigator } from "./Navigator";
import MenuMobile from "./MenuMobile";
import ShopCart from "./ShopCart";

const Header = () => {
  return (
    <>
      <TopBar />
      {/* Header */}
      <div className="bg-white md:bg-background-light">
        <MaxWidthContainer className="py-[22px]">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={166}
                height={40}
                priority
              />
            </Link>
            <SearchInput />
            <div className="hidden md:flex gap-[12px]">
              <ShopCart />
              <Link
                href="#"
                className="rounded-lg bg-white p-[11px] hover:bg-accent duration-300 group"
              >
                <Heart
                  strokeWidth="1.5"
                  className="w-[22px] h-[22px] group-hover:text-white transition"
                />
              </Link>
              <Link
                href="#"
                className="rounded-lg bg-white p-[11px] hover:bg-accent duration-300 group"
              >
                <User
                  strokeWidth="1.5"
                  className="w-[22px] h-[22px] group-hover:text-white transition"
                />
              </Link>
            </div>
            <div className="block md:hidden">
              <MenuMobile />
            </div>
          </div>
        </MaxWidthContainer>
      </div>
      <div className="shadow-sm">
        <MaxWidthContainer className="hidden md:block">
          <div className="flex justify-between items-center py-[14px] text-[#636270] leading-tight text-sm font-medium">
            <Navigator />
            <div>
              <span className="mr-2">Contact:</span>
              <span className="text-primary font-normal">(808) 555-0111</span>
            </div>
          </div>
        </MaxWidthContainer>
      </div>
    </>
  );
};

export default Header;
