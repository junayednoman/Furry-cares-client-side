import envConfig from "@/config";
import { delay } from "@/utils/delay";

const getData = async (url: string) => {
  const response = await fetch(`${envConfig.base_url}${url}`, {
    cache: "force-cache"
  });
  const data = await response.json();
  // await delay(1000)
  return data;
}
export default getData;