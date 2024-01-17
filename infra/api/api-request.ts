import { APIRequestContext, request } from "@playwright/test";
import { ResponseWrapper } from "../api/response-wrapper"

const apiPostMethod = async <T>(url: string, data?: any, availableRequest?: APIRequestContext): Promise<ResponseWrapper<T>> => {
   const requestContext = availableRequest || (await request.newContext());
   const requestApi = await requestContext.post(url, data)
   const responseWrapper: ResponseWrapper<T> = {
      data: await requestApi.json(),
      ok: requestApi.ok(),
      status: requestApi.status()
   };
   return responseWrapper;
}

export{apiPostMethod}