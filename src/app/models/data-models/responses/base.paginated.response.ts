export interface BasePaginatedResponse<T> {
  Index: number;
  PageSize: number;
  Total: number;
  items: T[];
  First: string;
  Next: string;
  Prev: string;
  Last: string;
}
