/* eslint-disable func-names */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import History from '@/shared/libs/history';
import AuthService from '@services/Auth';

import { BASE_API_URL } from '@definitions/config';

class Http {
  private _http: AxiosInstance;

  /**
   *
   * @param options AxiosRequestConfig
   */
  public constructor(options: AxiosRequestConfig) {
    // eslint-disable-next-line no-underscore-dangle
    this._http = axios.create(options);
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  /**
   *
   * @param url string
   * @param config AxiosRequestConfig
   */
  public get(url: string, config?: AxiosRequestConfig | undefined): Promise<AxiosResponse> {
    return this._http.get(url, config);
  }

  /**
   *
   * @param url
   * @param data
   * @param config
   */
  public post(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    return this._http.post(url, data, config);
  }

  /**
   *
   * @param url
   * @param data
   * @param config
   */
  public put(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    return this._http.put(url, data, config);
  }

  /**
   *
   * @param url
   * @param data
   * @param config
   */
  public patch(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    return this._http.patch(url, data, config);
  }

  /**
   *
   * @param url
   * @param data
   * @param config
   */
  public delete(url: string, config?: AxiosRequestConfig | undefined) {
    return this._http.delete(url, config);
  }

  /**
   *
   * @param url
   * @param data
   * @param config
   */
  public head(url: string, config?: AxiosRequestConfig | undefined) {
    return this._http.head(url, config);
  }

  /**
   *
   * @param url
   * @param data
   * @param config
   */
  public options(url: string, config?: AxiosRequestConfig | undefined) {
    return this._http.options(url, config);
  }

  /**
   *
   */
  private interceptorsRequest(): void {
    this._http.interceptors.request.use((config: AxiosRequestConfig) => {
      console.log(
        '🚀 ~ file: index.ts ~ line 33 ~ Http ~ this._http.interceptors.request.use ~ config',
        config,
      );
      return config;
    });
  }

  /**
   *
   */
  private interceptorsResponse(): void {
    this._http.interceptors.response.use((value: AxiosResponse) => {
      const { data } = value;
      const status = 401;
      if (status === 401 || status === 412) {
        return AuthService.logout();
      }

      if (status === 403) {
        return History.history.push('/404');
      }
      return data;
    });
  }
}

export default new Http({
  baseURL: BASE_API_URL,
});
