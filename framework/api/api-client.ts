import type {
  APIRequestContext,
  APIResponse,
  RequestOptions,
} from "@playwright/test";

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  get(url: string, options?: RequestOptions): Promise<APIResponse> {
    return this.request.get(url, options);
  }

  post(url: string, options?: RequestOptions): Promise<APIResponse> {
    return this.request.post(url, options);
  }

  put(url: string, options?: RequestOptions): Promise<APIResponse> {
    return this.request.put(url, options);
  }

  delete(url: string, options?: RequestOptions): Promise<APIResponse> {
    return this.request.delete(url, options);
  }
}
