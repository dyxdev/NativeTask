import { ApiResponse, ApisauceInstance, create, CancelToken } from "apisauce"
import { getGeneralApiProblem , BaseApiResponse} from "./apiProblem"
import type { ApiConfig } from "./api.types"

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: process.env.EXPO_PUBLIC_API_URL,
  timeout: 500000,
}

export const cancelTokenSource = CancelToken.source()

export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
    })
  }

  async get<T>(url: string, params?: object): Promise<BaseApiResponse<T>> {
    const response: ApiResponse<T> = await this.apisauce.get(url, params,{ cancelToken: cancelTokenSource.token })
    return this.handleResponse<T>(response)
  }

  async post<T>(url: string, data?: object): Promise<BaseApiResponse<T>> {
    const response: ApiResponse<T> = await this.apisauce.post(url, data,{ cancelToken: cancelTokenSource.token })
    return this.handleResponse<T>(response)
  }

    async put<T>(url: string, data?: object): Promise<BaseApiResponse<T>> {
    const response: ApiResponse<T> = await this.apisauce.put(url, data,{ cancelToken: cancelTokenSource.token })
    return this.handleResponse<T>(response)
  }

  async delete<T>(url: string): Promise<BaseApiResponse<T>> {
    const response: ApiResponse<T> = await this.apisauce.delete(url,{ cancelToken: cancelTokenSource.token })
    return this.handleResponse<T>(response)
  }

  private handleResponse<T>(response: ApiResponse<T>): BaseApiResponse<T> {
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return {
        success: false,
        isError: true,
        error: problem
      }
    }

    try {
      const rawData = response.data
      return {
        success: true,
        isError: false,
        data: rawData as T
      }
    } catch (e) {
      return this.handleError<T>(e, response)
    }
  }

  private handleError<T>(e: unknown, response: ApiResponse<T>): BaseApiResponse<T> {
    if (__DEV__ && e instanceof Error) {
      console.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
    }
    return {
      success: false,
      isError: true,
      error: { kind: "badData" }
    }
  }
}

const api = new Api()

const naviMonitor = (response: any) => console.log('this is for debug', response)
api.apisauce.addMonitor(naviMonitor)

export {api}