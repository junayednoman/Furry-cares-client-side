"use client";
import { StyleProvider } from "@ant-design/cssinjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StyleProvider layer>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </StyleProvider>
  );
};

export default Providers;
