import { apiPostMethod } from "../../infra/api/api-request"
import { CartRequest } from "./request-body/addToCart-api-requests"
import { UserCredential } from "./request-body/login-api-request"
import { APIRequestContext, request } from "playwright"
import urlsConfig from "../../configFiles/urls.json"
import { AccountAddress } from "./request-body/add-address-apiRequest"

export class ApiCalls {


    makeLogin = async (data: UserCredential, request: APIRequestContext) => {
        return await apiPostMethod(urlsConfig.apiUrl.loginUrl, data, request)
    }

    addItemToCart = async (data: CartRequest) => {
        return await apiPostMethod(urlsConfig.apiUrl.addToCartUrl, data)
    }

    addAddress = async (data: AccountAddress) => {
        return await apiPostMethod(urlsConfig.apiUrl.addressUrl, data)
    }
}