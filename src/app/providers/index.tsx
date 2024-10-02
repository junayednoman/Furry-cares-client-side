"use client";
import { StyleProvider } from "@ant-design/cssinjs";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <StyleProvider layer>{children}</StyleProvider>;
};

export default Providers;
