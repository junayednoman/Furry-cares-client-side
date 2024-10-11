
import { handleAuthMutation } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useAuthMutation = (key: string, url: string) => {

  return useMutation({
    mutationKey: [key],
    mutationFn: async (payload: FieldValues) => await handleAuthMutation(url, payload),
    onSuccess: (data) => {
      toast.success(data.message || "Mutation Successful");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong");
    }
  })
};
