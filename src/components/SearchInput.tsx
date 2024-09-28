import { Search } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <form className="w-full max-w-[412px] hidden lg:block">
      <div className="flex gap-2 rounded-lg bg-white py-[11px] px-4">
        <input type="text" placeholder="Search here..." className="flex-1 outline-none bg-transparent text-base text-muted leading-tight" />
        <Search strokeWidth="1.5" className="w-[22px] h-[22px]" />
      </div>
    </form>
  );
};

export default SearchInput;
