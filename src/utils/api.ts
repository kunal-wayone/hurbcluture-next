import { toast } from "react-toastify";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Default timeout in milliseconds
});

api.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined" && localStorage.getItem("adminToken");
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const request = async <T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(
    () => controller.abort(),
    config.timeout || 10000
  );

  try {
    // Handle multipart form data
    if (config.data instanceof FormData) {
      config.headers = {
        ...config.headers,
        "Content-Type": "multipart/form-data",
      };
    }

    const response = await api.request({
      ...config,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.message === "canceled") {
      toast.error("Request aborted");
    } else {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;
      toast.error(`Error ${status}: ${message}`);
    }
    throw error;
  }
};

export const Fetch = async <T>(
  url: string,
  params?: object,
  timeout?: number,
  successMessage?: string,
  failureMessage?: string
): Promise<T> => {
  toast.info("Please wait...", { autoClose: false });
  try {
    const response = await request<T>({
      method: "GET",
      url,
      params,
      timeout,
    });
    toast.dismiss(); // Dismiss the loading toast
    toast.success(successMessage ?? "Fetched successfully");
    return response.data;
  } catch (error) {
    toast.dismiss(); // Dismiss the loading toast
    toast.error(failureMessage ?? "Failed to fetch data");
    throw error;
  }
};

export const Post = async <T>(
  url: string,
  data: object | FormData,
  timeout?: number
): Promise<T> => {
  toast.info("Please wait...", { autoClose: false });
  try {
    const response = await request<T>({
      method: "POST",
      url,
      data,
      timeout,
    });
    toast.dismiss(); // Dismiss the loading toast
    // toast.success("Data submitted successfully");
    return response.data;
  } catch (error) {
    toast.dismiss(); // Dismiss the loading toast
    toast.error("Failed to submit data");
    throw error;
  }
};

export const Put = async <T>(
  url: string,
  data: object | FormData,
  timeout?: number
): Promise<T> => {
  toast.info("Updating data...", { autoClose: false });
  try {
    const response = await request<T>({
      method: "PUT",
      url,
      data,
      timeout,
    });
    toast.dismiss(); // Dismiss the loading toast
    toast.success("Data updated successfully");
    return response.data;
  } catch (error) {
    toast.dismiss(); // Dismiss the loading toast
    toast.error("Failed to update data");
    throw error;
  }
};

export const Delete = async <T>(
  url: string,
  params?: object,
  timeout?: number
): Promise<T> => {
  toast.info("Deleting data...", { autoClose: false });
  try {
    const response = await request<T>({
      method: "DELETE",
      url,
      params,
      timeout,
    });
    toast.dismiss(); // Dismiss the loading toast
    toast.success("Data deleted successfully");
    return response.data;
  } catch (error) {
    toast.dismiss(); // Dismiss the loading toast
    toast.error("Failed to delete data");
    throw error;
  }
};
