import { Injectable, ErrorHandler } from "@angular/core";
import { GlobalAlertHandler } from "../alert-services/alert-handler";
import { ParsedError } from "./models/parsed-error";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private alertHandler: GlobalAlertHandler) {
  }

  handleError(error: any) {
    // unroll errors from promises
    if (error.rejection) {
      error = error.rejection;
    }

    let parsedError = this.parse(error);
    let alertMessage = parsedError.message + (parsedError.stack != null ? ' :: ' + parsedError.stack.toString() : '');
    this.alertHandler.presentAlert('Error', alertMessage);
    console.log(error);
  }

  parse(error: any): ParsedError {
    // get best available error message
    let parsedError: ParsedError = {
      message: error.message ? error.message as string : error.toString()
    };

    // include HTTP status code
    if (error.status != null) {
      parsedError.status = error.status;
    }

    // include stack trace
    if (error.stack != null) {
      parsedError.stack = error.stack;
    }

    return parsedError;
  }
}
