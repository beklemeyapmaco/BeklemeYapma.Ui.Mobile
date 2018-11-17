import { UserService } from "../../app/core/services/business-services/user/user.service";
import { InjectorModule } from "../../app/core/helpers/injector/injector.module";
import { User } from "../../app/models/user/user";

export abstract class BaseComponent {
  protected userService: UserService;
  protected currentUser: User = <User>{};
  constructor() {
    this.userService = InjectorModule.Injector.get(UserService);
    this.setUser();
  }

  setUser() {
    this.currentUser = this.userService.getCurrentUser();
  }
}
