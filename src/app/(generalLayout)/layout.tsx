import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ReactNode } from "react";

const GeneralLayout = ({
  children,
  homeBanner,
}: {
  children: ReactNode;
  homeBanner: ReactNode;
}) => {
  return (
    <>
      <Header />
      {homeBanner}
      {children}
      <Footer />
    </>
  );
};

export default GeneralLayout;
