import { BaseResponse } from "../../../models/data-models/responses/base.response";
import { of } from "rxjs";

export class BaseResponseWrapper {
  constructor() {}

  public static getWrappedResponse<T>(
    data: T,
    hasError: boolean,
    errors: any[],
    total: number
  ) {
    const response = <BaseResponse<T>>{
      Data: data,
      HasError: hasError,
      Errors: errors,
      Total: total
    };
    return of(response);
  }
}
