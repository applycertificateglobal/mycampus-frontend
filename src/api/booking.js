import { fetchFromAPI } from "@/utils/api";

export async function getBookings() {
  return fetchFromAPI("/bookings?populate=*");
}
