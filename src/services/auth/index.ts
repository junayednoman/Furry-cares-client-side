"use server"
import axiosInstance from "@/hooks/axiosInstance";
import { jwtDecode } from "jwt-decode";
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

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedUser = null;
  if (accessToken) {
    decodedUser = await jwtDecode(accessToken);
    return {
      _id: decodedUser._id,
      name: decodedUser.name,
      email: decodedUser.email,
      role: decodedUser.role,
    };
  }
  return decodedUser;
};


export const logOut = () => {
  cookies().delete("accessToken")
  cookies().delete("refreshToken")
}