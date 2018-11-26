import { Injectable } from "@angular/core";
import { BaseDataService } from "../base-data.service";
import { environment } from "../../../../../environments/environment";
import { BasePaginatedResponse } from "../../../../models/data-models/responses/base.paginated.response";
import { RestaurantResponse } from "../../../../models/data-models/responses/restaurant/restaurant.response";

class EndPoints {
  static GET_RESTAURANTS = "/restaurants?company_id={company_id}";
}

@Injectable()
export class RestaurantDataService extends BaseDataService {
  baseUrl = environment.BASE_BFF_API_URL;
  constructor() {
    super();
  }

  getRestaurants(companyId: string) {
    const params = {
      company_id: companyId
    };

    const endPoint = this.createQueryString(
      EndPoints.GET_RESTAURANTS,
      params
    );
    return this.Get<BasePaginatedResponse<RestaurantResponse>>(endPoint);
  }
}
