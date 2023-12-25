import { UserTypes } from "../types/UserTypes"

const BASE_URL = "http://localhost:3000/"

export async function getAllAgents(){
try {
    const response = await fetch(`${BASE_URL}agents`,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    const data = await response.json()
    return data
    
    
} catch (error:any) {
    throw new Error(error.message)
}
}

export async function newAgent(userData:UserTypes){
    try {
        const response = await fetch(`${BASE_URL}auth/signup`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        const data = await response.json()
        if(data.statusCode === 500){
            throw new Error(data.message)
        }
        return data
       
    } catch (error:any) {
        throw new Error(error.message)
    }
}