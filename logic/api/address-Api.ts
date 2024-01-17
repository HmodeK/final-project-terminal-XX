import configJson from "../../config.json"
import { apiPostMethod } from "../../infra/api/api-request";
import { addressRequest } from "./request-body/address-api-request";

export const addAddress = async ( addAddressData: addressRequest)=>{
    return await apiPostMethod(configJson.addressUrl, addAddressData)
}