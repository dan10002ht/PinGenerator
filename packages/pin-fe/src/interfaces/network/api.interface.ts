type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IFetchApiProps<T = unknown> {
  url: string;
  defaultData?: T | T[];
  initLoad?: boolean;
  presentData?: ((data: T) => void) | null;
  method?: HttpMethod;
  postData?: Record<string, unknown>;
}
