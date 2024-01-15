import { APIRequestContext, request } from "@playwright/test";


const putRequest = async (url:string,body:any,token:string) => {
    const myRequest = await request.newContext()
    return await myRequest.put(url,{
    data:body,
    headers:{"Ecomtoken":token,}
   })     
} 
   const postRequest = async (url:string,body:any,token:string) => {
    const myRequest = await request.newContext()
    return await myRequest.post(url,{
    data:body,
    headers:{"Ecomtoken":token,}
   })      
}


const patchRequest = async (url:string,token:string) => {
    const myRequest = await request.newContext()
    return await myRequest.patch(url,{
    headers:{"Ecomtoken":token,}
   })      


   
}

const makeLoginViaApi = async <T>(url: string, data?: any,availableRequest?: APIRequestContext) => {
   const myRequest = availableRequest || (await request.newContext());
   await myRequest.post(url,data);
}

export{putRequest,postRequest,patchRequest,makeLoginViaApi}