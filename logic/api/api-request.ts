import configJson from "../../config.json"
import { makeLoginViaApi } from "../../infra/api/api-request"
import { requestOptionsUserLogin } from "./request-body/login-api-request"
import { APIRequestContext } from "playwright"

export const makeLogin = async (request : APIRequestContext) => {
    return await makeLoginViaApi(configJson.apiLoginUrl,requestOptionsUserLogin(configJson.loginPage.userName,configJson.loginPage.password),request)
}