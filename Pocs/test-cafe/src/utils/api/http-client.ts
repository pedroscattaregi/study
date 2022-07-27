import type { AxiosInstance } from "axios";
import axios from "axios";

export class HttpClient {
  public static create(url: string, headers: Record<string, string> = {}): AxiosInstance {
    return axios.create({
      baseURL: url,
      headers,
    });
  }
}