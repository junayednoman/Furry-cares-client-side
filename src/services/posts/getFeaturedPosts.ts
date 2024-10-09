import envConfig from "@/config";
import { delay } from "@/utils/delay";

const getFeaturedPosts = async () => {
  const response = await fetch(`${envConfig.base_url}/posts?sort=-votes`, {
    cache: "no-cache",
  });
  const data = await response.json();
  await delay(1000);
  return data;
}
export default getFeaturedPosts;