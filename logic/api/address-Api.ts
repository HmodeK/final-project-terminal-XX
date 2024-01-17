import { apiPostMethod } from "../../infra/api/api-request";
import { AccountAddress } from "../Api/request-body/address-api-request"
import urlsConfig from "../../configFiles/urls.json"

export const addAddress = async ( addAddressData: AccountAddress)=>{
    return await apiPostMethod(urlsConfig.apiUrl.addressUrl, addAddressData)
}