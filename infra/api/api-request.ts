import { APIRequestContext, request } from "@playwright/test";


const apiPostMethod = async <T>(url: string, data?: any) => {
   const myRequest = (await request.newContext());
   await myRequest.post(url,data);
}
export{apiPostMethod}