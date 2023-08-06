import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { PassengerInfo } from '@/type'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/se331-2022/passengerdb',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  getEvent(perPage: number, page: number): Promise<AxiosResponse<PassengerInfo[]>> {
    return apiClient.get<Array<PassengerInfo>>('/passenger?_limit=' + perPage + '&_page=' + page)
  },
  getEventById(id: number): Promise<AxiosResponse<PassengerInfo>> {
    return apiClient.get<PassengerInfo>('Passenger/' + id.toString())
  }
}
