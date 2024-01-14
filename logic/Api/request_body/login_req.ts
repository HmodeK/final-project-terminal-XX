import exp from "constants"

interface LoginRequest{
    name:string,
    password: string
}

const setLoginRequest=(name:string,password:string)=>{
    return {
        name: name,
        password:password
    }
}
    export{
        LoginRequest,setLoginRequest
    }
