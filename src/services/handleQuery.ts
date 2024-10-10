import axiosInstance from "@/hooks/axiosInstance"

const handleQuery = async (url: string, params?: Record<string, any>) => {
  try {
    const { data } = await axiosInstance.get(url, {
      params,
    });
    // await delay(3000);
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Something went wrong!");
  }
}

export default handleQuery