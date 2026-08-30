import { api } from "@/api/axios";
import type { RegisterFormData } from "@/types/registerform";


export async function  registerUser(data:RegisterFormData){

    const response  =await api.post("pass-auth-url",
        data
    );

    return response.data;
}