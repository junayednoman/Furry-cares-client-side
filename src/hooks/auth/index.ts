
import { handleAuthMutation } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useAuthMutation = (key: string, url: string) => {
  const router = useRouter()
  return useMutation({
    mutationKey: [key],
    mutationFn: async (payload: FieldValues) => await handleAuthMutation(url, payload),
    onSuccess: (data) => {
      toast.success(data.message || "Mutation Successful");
      router.push("/")
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong");
    }
  })
};
