import { useQuery } from "react-query";

import { categories_api } from "../../../ApiRoutes";
import MainApi from "../../../MainApi";
import { onErrorResponse } from "../../../api-error-response/ErrorResponses";

const getData = async (searchKey) => {
  if (searchKey && searchKey !== "") {
    return await MainApi.get(`${categories_api}?name=${searchKey}`);
  } else {
    return await MainApi.get(`${categories_api}`);
  }
};
export const useGetCategories = (
  searchKey,
  handleRequestOnSuccess,
  queryKey
) => {
  return useQuery(queryKey ? queryKey : "posts", () => getData(searchKey));
  // return useQuery(queryKey ? queryKey : "posts", () => getData(searchKey), {
  //   enabled: false,
  //   onSuccess: handleRequestOnSuccess,
  //   onError: onErrorResponse,
  // });
};

const getFeaturedData = async () => {
  return await MainApi.get(`${categories_api}?featured=1`);
};
export const useGetFeaturedCategories = () => {
  return useQuery("featured-categories-list", () => getFeaturedData(), {
    enabled: false,
    onError: onErrorResponse,
  });
};
