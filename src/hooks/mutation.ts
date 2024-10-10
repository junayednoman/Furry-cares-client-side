import { handlePost, handlePostFormData, handleUpdateFormData } from "@/services/mutation";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUpdateWithFormData = (key: string, url: string) => {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (payload: FormData) => await handleUpdateFormData(url, payload),
    onSuccess: (data) => {
      toast.success(data.message || "Mutation Successful");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong");
    }
  })
};

export const usePostWithFormData = (key: string, url: string) => {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (payload: FormData) => await handlePostFormData(url, payload),
    onSuccess: (data) => {
      toast.success(data.message || "Mutation Successful");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong");
    }
  })
};

export const usePost = (key: string, url: string) => {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (payload: FieldValues) => await handlePost(url, payload),
    onSuccess: (data) => {
      toast.success(data.message || "Mutation Successful");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong");
    }
  })
};
