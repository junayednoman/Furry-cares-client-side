import { handleDelete, handlePatch, handlePost, handlePostFormData, handleUpdateFormData } from "@/services/mutation";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const usePostWithFormData = (key: string, url: string) => {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (payload: FormData) => await handlePostFormData(url, payload),
    onSuccess: (data) => {
      toast.success(data.message || "Mutation Successful");
    },
    onError: (error) => {
      toast.error(error.message || "unable to create ");
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
      toast.error(error.message || "unable to post");
    }
  })
};


export const useUpdateWithFormData = (key: string, url: string) => {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (payload: FormData) => await handleUpdateFormData(url, payload),
    onSuccess: (data) => {
      toast.success(data.message || "Mutation Successful");
    },
    onError: (error) => {
      toast.error(error.message || "unable to update");
    }
  })
};

export const usePartialUpdate = (key: string, url: string) => {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (payload: FieldValues) => await handlePatch(url, payload),
    onSuccess: (data) => {
      toast.success(data.message || "Mutation Successful");
    },
    onError: (error) => {
      toast.error(error.message || "unable to update");
    }
  })
};

export const useDeleteData = (key: string, url: string) => {
  return useMutation({
    mutationKey: [key],
    mutationFn: async () => await handleDelete(url),
    onSuccess: (data) => {
      toast.success(data.message || "Mutation Successful");
    },
    onError: (error) => {
      toast.error(error.message || "unable to delete");
    }
  })
};
