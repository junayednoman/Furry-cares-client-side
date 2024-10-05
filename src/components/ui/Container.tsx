import { ReactNode } from "react";

const FContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="xl:max-w-[1350px] lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3">
      {children}
    </div>
  );
};
export default FContainer;
