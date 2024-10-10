
import handleMutationFormData from "@/services/handleMutationFormData";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useMutationFormData = (key: string, url: string) => {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (payload: FormData) => await handleMutationFormData(url, payload),
    onSuccess: (data) => {
      toast.success(data.message || "Mutation Successful");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong");
    }
  })
};
