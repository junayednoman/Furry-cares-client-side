"use client";
import { StyleProvider } from "@ant-design/cssinjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StyleProvider layer>
      <Toaster position="top-center" duration={1800} />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </StyleProvider>
  );
};

export default Providers;
