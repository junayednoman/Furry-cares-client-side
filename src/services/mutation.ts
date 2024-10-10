"use server"
import axiosInstance from "@/hooks/axiosInstance"
import { FieldValues } from "react-hook-form";

export const handleUpdateFormData = async (url: string, formData: FormData) => {
  try {
    const { data } = await axiosInstance.put(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Something went wrong!");
  }
}

export const handlePostFormData = async (url: string, formData: FormData) => {
  try {
    const { data } = await axiosInstance.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Something went wrong!");
  }
}

export const handlePost = async (url: string, payload: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(url, payload, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Something went wrong!");
  }
}
