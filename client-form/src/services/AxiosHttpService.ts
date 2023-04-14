import axios from 'axios'

const AxiosHttpService = () => {
  const axiosInstance = axios.create()
  const httpConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Authorization: localStorageUtils.getAccessToken(),
      // 'accept-language': i18n.language,
    },
  }

  return {
    Get: (url: string) => axiosInstance.get(url, httpConfig),
    Post: (url: string, data: any) => axiosInstance.post(url, data, httpConfig),
    Patch: (url: string, data: any) =>
      axiosInstance.patch(url, data, httpConfig),
    Put: (url: string, data: any) => axiosInstance.put(url, data, httpConfig),
  }
}
export default AxiosHttpService
