export interface BasePaginatedResponse<T> {
  index: number;
  page_size: number;
  total: number;
  items: T[];
  first: string;
  next: string;
  prev: string;
  last: string;
}
