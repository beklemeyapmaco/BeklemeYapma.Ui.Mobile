import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { InjectorModule } from "../../helpers/injector/injector.module";
import { catchError, map } from "rxjs/operators";
import { BaseResponse } from "../../../models/data-models/responses/base.response";

// It works like Generic HttpClient that you can modify custom scenarios

// FUTURE: Base Response For TResponse like <BaseResponse<TResponse>>
@Injectable({
  providedIn: 'root'
})
export class BaseDataService {
  protected baseUrl = "";
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = InjectorModule.Injector.get(HttpClient);
  }

  protected Get<TResponse>(
    endPoint: string
  ): Observable<BaseResponse<TResponse>> {
    return this.httpClient.get<TResponse>(this.baseUrl + endPoint).pipe(
      map(data => {
        const response = <BaseResponse<TResponse>>{};
        response.data = data;
        response.errors = [];
        response.has_error = false;
        return response;
      }),
      catchError(errors => {
        const response = <BaseResponse<TResponse>>{};
        response.errors = [];
        response.errors.push(errors.error);
        response.has_error = true;
        return of(response);
      })
    );
  }

  protected Post<TRequest, TResponse>(
    endPoint: string,
    body: TRequest
  ): Observable<BaseResponse<TResponse>> {
    return this.httpClient.post<TResponse>(this.baseUrl + endPoint, body).pipe(
      map(data => {
        console.log(data);
        const response = <BaseResponse<TResponse>>{};
        response.data = data;
        response.errors = [];
        response.has_error = false;
        console.log(response);
        return response;
      }),
      catchError(errors => {
        const response = <BaseResponse<TResponse>>{};
        response.errors = [];
        response.errors.push(errors.error);
        response.has_error = true;
        return of(response);
      })
    );
  }

  protected Put<TRequest, TResponse>(
    endPoint: string,
    body: TRequest
  ): Observable<BaseResponse<TResponse>> {
    return this.httpClient.put<TResponse>(this.baseUrl + endPoint, body).pipe(
      map(data => {
        const response = <BaseResponse<TResponse>>{};
        response.data = data;
        response.errors = [];
        response.has_error = false;
        return response;
      }),
      catchError(errors => {
        const response = <BaseResponse<TResponse>>{};
        response.errors = [];
        response.errors.push(errors.error);
        response.has_error = true;
        return of(response);
      })
    );
  }

  protected Delete<TResponse>(endPoint: string): Observable<TResponse> {
    return this.httpClient.delete<TResponse>(this.baseUrl + endPoint);
  }

  protected DeleteWithParams<TResponse>(
    endPoint: string,
    params: Object
  ): Observable<TResponse> {
    const qs = this.createQueryString(endPoint, params);
    return this.httpClient.delete<TResponse>(this.baseUrl + qs);
  }

  protected createQueryString(urlPath: string, params: Object): string {
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        if (params[key] instanceof Array) {
          let str = "";
          for (const item of params[key]) {
            str += key + "=" + item + "&";
          }
          str = str.substring(0, str.length - 1);
          urlPath = urlPath.replace(`${key}=`, "");
          urlPath = urlPath.replace(`{${key}}`, params[key] == null ? "" : str);
        } else {
          urlPath = urlPath.replace(
            `{${key}}`,
            params[key] == null ? "" : params[key]
          );
        }
      }
    }
    return urlPath;
  }
}
