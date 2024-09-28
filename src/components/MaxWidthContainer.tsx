import { cn } from "@/lib/utils";
import { FC } from "react";

interface MaxWidthContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthContainer: FC<MaxWidthContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('w-full px-4 md:px-8', className)}>
      <div className="max-w-[1384px] mx-auto">
        {children}
      </div>
    </div>
  );
};

export default MaxWidthContainer;
