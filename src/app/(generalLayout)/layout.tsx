import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ReactNode } from "react";

const GeneralLayout = ({
  children,
}: {
  children: ReactNode;
  homeBanner: ReactNode;
  featuredStory: ReactNode;
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default GeneralLayout;
