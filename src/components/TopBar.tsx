import { AlertCircle, Check } from "lucide-react";
import Link from "next/link";
import MaxWidthContainer from "./MaxWidthContainer";

const TopBar = () => {
  return (
    <MaxWidthContainer className="bg-foreground">
      <div className="flex flex-row flex-wrap justify-center sm:justify-between items-center gap-4 py-[14px] text-white text-sm opacity-70 font-light leading-tight">
        <div className="flex flex-nowrap items-center gap-[6px]">
          <Check className="w-4 h-4" />
          <span>Free shipping on all orders over $50</span>
        </div>
        <div>
          <ul className="flex gap-6">
            <li>
              <Link href="/faqs">
                Faqs</Link>
            </li>
            <li>
              <Link
                href="/help"
                className="flex flex-nowrap items-center gap-[6px]"
              >
                <AlertCircle className="w-4 h-4" />
                <span>Need Help</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default TopBar;
