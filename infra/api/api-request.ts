import { APIRequestContext, request } from "@playwright/test";

const makeLoginViaApi = async <T>(url: string, data?: any,availableRequest?: APIRequestContext) => {
   const myRequest = availableRequest || (await request.newContext());
  await myRequest.post(url,data);
}

const apiPostMethod = async <T>(url: string, data?: any) => {
   const myRequest = (await request.newContext());
   await myRequest.post(url,data);
}
export{makeLoginViaApi,apiPostMethod}