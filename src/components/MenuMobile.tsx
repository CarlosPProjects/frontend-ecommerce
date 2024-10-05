import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const MenuMobile = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu strokeWidth="1.5" className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetDescription>
            A project by{" "}
            <Link href="https://github.com/CarlosPProjects">Carlos G.</Link>
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 mt-4">
          <ul className="flex flex-col gap-2">
            <li className="">
              <SheetClose asChild>
                <Link
                  href="/"
                  className="block px-4 py-4 rounded-xl bg-background-light/50 w-full"
                >
                  Home
                </Link>
              </SheetClose>
            </li>
            <li className="">
              <SheetClose asChild>
                <Link
                  href="/shop"
                  className="block px-4 py-4 rounded-xl bg-background-light/50 w-full"
                >
                  Shop
                </Link>
              </SheetClose>
            </li>
            <li className="">
              <SheetClose asChild>
                <Link
                  href="/#"
                  className="block px-4 py-4 rounded-xl bg-background-light/50 w-full"
                >
                  About
                </Link>
              </SheetClose>
            </li>
            <li className="">
              <SheetClose asChild>
                <Link
                  href="/cart"
                  className="block px-4 py-4 rounded-xl bg-background-light/50 w-full"
                >
                  Cart
                </Link>
              </SheetClose>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuMobile;
