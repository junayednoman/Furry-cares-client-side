"use server"
import axiosInstance from "@/hooks/axiosInstance";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const handleAuthMutation = async (url: string, payload: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(url, payload);
    if (data?.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Something went wrong");
  }
}