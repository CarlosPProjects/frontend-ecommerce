import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const MenuMobile = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu strokeWidth="1.5" className="w-6 h-6"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when your done.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1">
          <ul className="flex flex-col gap-2">
            <li className="">
              <Link href="/#" className="block px-4 py-4 rounded-xl bg-background-light/50 w-full">Home</Link>
            </li>
          </ul>
        </div>
        <SheetFooter className="justify-center">
          <div className="w-full">
            <p className="text-center">Copy</p>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MenuMobile;
