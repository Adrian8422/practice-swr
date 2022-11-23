import useSWR from "swr";
import useSWRInmutable from "swr";
import { fetchAPI } from "./api";
export function useMe() {
  const { data, error } = useSWR("/users/me", fetchAPI);
  console.log(data);
  return data;
}

export function useProduct(id: string) {
  const { data, error } = useSWRInmutable("/products/" + id, fetchAPI);

  return data;
}
