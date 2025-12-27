import { request } from "@umijs/max";

export async function login(params: any) {
    console.log("异步登录");
    console.log(params);    
//   return request('/user/login', {
//     method: 'POST',
//     data: params,
//   });
}