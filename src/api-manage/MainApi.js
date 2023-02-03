import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const MainApi = axios.create({
  baseURL: baseUrl,
});

MainApi.interceptors.request.use(function (config) {
  let token = undefined;
  let language = undefined;
  //   let software_id = 33571750;
  let hostname = process.env.NEXT_CLIENT_HOST_URL;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
    language = localStorage.getItem("language-setting");
  }

  if (token) config.headers.authorization = `Bearer ${token}`;
  if (language) config.headers["X-localization"] = language;
  if (hostname) config.headers["origin"] = hostname;
  //   config.headers["X-software-id"] = software_id;

  return config;
});
// MainApi.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response.status === 401) {
//             toast.error(t('Your token has been expired.please sign in again'), {
//                 id: 'error',
//             })
//             localStorage.removeItem('token')
//             store.dispatch(removeToken())
//         }
//         return Promise.reject(error)
//     }
// )

export default MainApi;
