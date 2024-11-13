import { ReactNode } from "react";

const FContainer = ({
  children,
  wide,
}: {
  children: ReactNode;
  wide?: boolean;
}) => {
  return (
    <div
      className={`xl:max-w-[1350px] lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3 ${
        wide ? "2xl:max-w-[1530px] xl:max-w-full 2xl:px-4 xl:px-10" : "xl:px-4"
      }`}
    >
      {children}
    </div>
  );
};
export default FContainer;
