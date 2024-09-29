import { Skeleton } from "@/components/ui/skeleton";

const CardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="min-h-[312px] w-full rounded-xl" />
      <div className="flex justify-between gap-3">
        <div>
          <Skeleton className="h-4 w-[150px] mb-[10px]" />
          <Skeleton className="h-4 w-[80px]" />
        </div>
        <Skeleton className="w-11 h-11 rounded-lg" />
      </div>
    </div>
  );
};

export default CardSkeleton;
