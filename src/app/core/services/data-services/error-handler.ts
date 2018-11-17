import { Injectable, ErrorHandler } from "@angular/core";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error: any) {
    throw new Error("Method not implemented.");
  }
}
