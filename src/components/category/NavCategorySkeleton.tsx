import { Skeleton } from "@/components/ui/skeleton";

const NavCategorySkeleton = () => {
  return (
    <div className="flex flex-col space-y-3 my-2">
      <Skeleton className="h-5 max-w-[150px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 max-w-[250px]" />
        <Skeleton className="h-4 max-w-[200px]" />
      </div>
    </div>
  );
};

export default NavCategorySkeleton;
