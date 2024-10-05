import Header from "@/components/layout/Header";
import { ReactNode } from "react";

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default GeneralLayout;
