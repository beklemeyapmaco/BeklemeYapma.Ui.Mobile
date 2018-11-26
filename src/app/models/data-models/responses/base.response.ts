export interface BaseResponse<T> {
  has_error: boolean;
  errors: string[];
  total: number;
  data: T;
}
