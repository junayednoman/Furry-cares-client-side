"use server"
import axiosInstance from "@/hooks/axiosInstance"
import { FieldValues } from "react-hook-form";



export const handlePostFormData = async (url: string, formData: FormData) => {
  try {
    const { data } = await axiosInstance.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error: any) {
    console.log('error insie, ', error?.response?.data);
    throw new Error(error?.response?.data?.message || "unable to create post!");
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
    throw new Error(error?.response?.data?.message || "unable to create post!");
  }
}

export const handleUpdateFormData = async (url: string, formData: FormData) => {
  try {
    const { data } = await axiosInstance.put(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "unable to update!");
  }
}

export const handlePatch = async (url: string, formData: FieldValues) => {
  try {
    const { data } = await axiosInstance.patch(url, formData, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return data;
  } catch (error: any) {
    console.log('error inside, ', error?.response?.data);
    throw new Error(error?.response?.data?.message || "unable to update!");
  }
}

export const handleDelete = async (url: string) => {
  try {
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Unable to delete!");
  }
}