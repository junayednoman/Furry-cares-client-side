import envConfig from "@/config";

const getData = async (url: string) => {
  const response = await fetch(`${envConfig.api_base_url}${url}`, {
    cache: "force-cache"
  });
  const data = await response.json();
  return data;
}
export default getData;