import configJson from "../../config.json"
import { apiPostMethod, makeLoginViaApi } from "../../infra/api/api-request"
import { requestOptionsAddToCart } from "./request-body/Add-to-cart-api-requests"
import { requestOptionsUserLogin } from "./request-body/login-api-request"
import { APIRequestContext } from "playwright"

export const makeLogin = async (request: APIRequestContext) => {
    return await makeLoginViaApi(configJson.apiUrl.loginUrl, requestOptionsUserLogin(configJson.loginPage.userName, configJson.loginPage.password), request)
}

export const addItem_to_cart = async (itemId: string, qty: number) => {
    return await apiPostMethod(configJson.apiUrl.addToCartUrl, requestOptionsAddToCart(itemId, qty))
}