export interface BaseResponse<T> {
  HasError: boolean;
  Errors: string[];
  Total: number;
  Data: T;
}
