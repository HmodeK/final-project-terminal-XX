import { apiPostMethod } from "../../infra/api/api-request"
import { CartRequest } from "./request-body/add-to-cart-api-requests"
import { UserCredential } from "./request-body/login-api-request"
import { APIRequestContext, request } from "playwright"
import urlsConfig from "../../configFiles/urls.json"

export class ApiCalls {
    makeLoginViaApi = async <T>(url: string, data?: any, availableRequest?: APIRequestContext) => {
        const myRequest = availableRequest || (await request.newContext());
        await myRequest.post(url, data);
    }
    makeLogin = async (data: UserCredential, request: APIRequestContext) => {
        return await this.makeLoginViaApi(urlsConfig.apiUrl.loginUrl, data, request)
    }

    addItem_to_cart = async (data: CartRequest) => {
        return await apiPostMethod(urlsConfig.apiUrl.addToCartUrl, data)
    }
}