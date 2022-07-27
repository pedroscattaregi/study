/* eslint-disable @typescript-eslint/naming-convention */
import { environment } from "../../../config/environment";
import type { AxiosInstance, AxiosResponse } from "axios";
import { HttpClient } from "./http-client";

interface Device {
  id: string;
  system_name: string;
  type: string;
  hdd_capacity: string;
}

export class DevicesApiService {

  private readonly client: AxiosInstance;

  private baseurl  =  environment.API_BASE_URL;

  public constructor() {
    this.client = HttpClient.create(this.baseurl);
  }

  public async getDevicesList(): Promise<Device[]> {
    const url = `/devices`;
    try {
      const res: AxiosResponse<Device[]> = await this.client.get(url);

      return res.data;
    } catch (err) {
      console.error("Could not get devices", { err });
      return [
        {
          id: "",
          system_name: "",
          type: "",
          hdd_capacity: "0"
        }
      ];
    }
  }

  public async update(id: string, name: string, type: string, capacity: string): Promise<void> {
    const url = `/devices/${id}`;
    const body = {
      "system_name": `${name}`,
      "type": `${type}`,
      "hdd_capacity": `${capacity}`,
    };
    try {
      await this.client.put(url, body);
    } catch (err) {
      console.error("Could not edit the device", { err });
    }
  }

  public async delete(id: string): Promise<void> {
    const url = `/devices/${id}`;
    try {
      await this.client.delete(url);
    } catch (err) {
      console.error("Could not delete the device", { err });
    }
  }
}
