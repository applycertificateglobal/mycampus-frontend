import { fetchFromAPI } from "@/utils/api";

export async function getAmbassadors() {
  return fetchFromAPI("/ambassadors?populate=*");
}
