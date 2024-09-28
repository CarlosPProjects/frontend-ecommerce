import Image from "next/image";
import MaxWidthContainer from "./MaxWidthContainer";
import TopBar from "./TopBar";
import { Heart, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <>
      <TopBar />
      {/* Header */}
      <div className="bg-background-light">
        <MaxWidthContainer className="py-[22px]">
          <div className="flex justify-between items-center">
            <Image src="/assets/logo.png" alt="Logo" width={166} height={40} />
            <SearchInput />
            <div className="hidden md:flex gap-[12px]">
              <div className="rounded-lg bg-white p-[11px]">
                <ShoppingCart className="w-[22px] h-[22px]" />
              </div>
              <Link
                href="#"
                className="rounded-lg bg-white p-[11px] hover:bg-accent duration-300 group"
              >
                <Heart className="w-[22px] h-[22px] group-hover:text-white transition" />
              </Link>
              <Link
                href="#"
                className="rounded-lg bg-white p-[11px] hover:bg-accent duration-300 group"
              >
                <UserRound className="w-[22px] h-[22px] group-hover:text-white transition" />
              </Link>
            </div>
          </div>
        </MaxWidthContainer>
      </div>
    </>
  );
};

export default Header;
