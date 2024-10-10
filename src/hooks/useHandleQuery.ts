import handleQuery from "@/services/handleQuery";
import { useQuery } from "@tanstack/react-query";

export const useHandleQuery = (queryKey: string, url: string, params?: Record<string, any>) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => await handleQuery(url, params),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
