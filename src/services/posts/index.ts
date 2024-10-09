import envConfig from "@/config";
import { delay } from "@/utils/delay";

const getData = async (url: string) => {
  const response = await fetch(`${envConfig.base_url}${url}`);
  const data = await response.json();
  await delay(3000)
  return data;
}
export default getData;