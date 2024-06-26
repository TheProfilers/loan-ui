import { FloatType } from "../types/FloatType";

const BASE_URL = "https://fare-rate-api-2e26b3504be5.herokuapp.com/"

export async function newFloat(float:FloatType){
    try {
        const response = await fetch(`${BASE_URL}shopfloat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
          },
          body: JSON.stringify(float),
        });
        
        const data = await response.json();
        console.log(data)
        if (data.statusCode === 500) {
          throw new Error(data.message);
        }
        
        if (data.statusCode || data.message) {
          throw new Error(data.message);
        }
        return data;
      }catch (error: any) {
        throw new Error(error.message);
      }

}

export async function getShopAgentFloats(shopagentId:string){
    try {
        const response = await fetch(`${BASE_URL}shopfloat/agent/${shopagentId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
          },
        });
        const data = await response.json();
        if (data.statusCode === 500) {
          throw new Error(data.message);
        }
        if (data.statusCode || data.message) {
          throw new Error(data.message);
        }
        return data;
      }catch (error: any) {
        throw new Error(error.message);
      }
}