"use server"
import axiosInstance from "@/hooks/axiosInstance"

const handleMutationFormData = async (url: string, formData: FormData) => {
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

export default handleMutationFormData