import { AxiosError, AxiosResponse } from 'axios';
type HTTPMethod = "get" | "post" | "put" | "delete";


type ApiError<T = unknown> = AxiosError & {
  response?: AxiosResponse<T>
}
