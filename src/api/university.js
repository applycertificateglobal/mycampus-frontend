import { fetchFromAPI } from "@/utils/api";

export async function getUniversities() {
  return fetchFromAPI("/universities?populate=*");
}
