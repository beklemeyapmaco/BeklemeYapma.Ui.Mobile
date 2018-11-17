import { Injectable } from "@angular/core";
import { User } from "../../../../models/user/user";

const USERNAME_PASSWORD = "user:pass";

@Injectable({
  providedIn: "root"
})
export class UserService {
  token = "";
  constructor() {
    this.setToken();
  }

  getCurrentUser(): User {
    const user = <User>{};

    return user;
  }

  private setToken() {
    this.token = this.getToken();
  }

  private getToken() {
    const token = localStorage.getItem("TOKEN");
    if (token) {
      return token;
    }
    return null;
  }
}
