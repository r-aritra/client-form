import { AxiosResponse } from 'axios'
import { API_BASE_URL } from '../appConstants'
import AxiosHttpService from './AxiosHttpService'

const apiUrl = API_BASE_URL

export const Service = {
  fetchServiceList: (): Promise<AxiosResponse<any>> => {
    return AxiosHttpService().Get(`${apiUrl}service`)
  },
  createService: (body: any): Promise<AxiosResponse<any>> => {
    return AxiosHttpService().Put(`${apiUrl}service`, body)
  },
}