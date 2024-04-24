import { SAgentType } from "../types/SAgentTypes";

const BASE_URL = "https://fare-rate-api-2e26b3504be5.herokuapp.com/"

export async function newSAgent(agent:SAgentType){
    try {
        const response = await fetch(`${BASE_URL}shopagents`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
          },
          body: JSON.stringify(agent),
        });
        
        const data = await response.json();
        console.log(data)
        if (data.statusCode === 500) {
          throw new Error(data.message);
        }
        if (response.status === 401) {
          throw new Error("You are not authorized to perform this action");
        }
        if (data.statusCode || data.message) {
          throw new Error(data.message);
        }
        return data;
      }catch (error: any) {
        throw new Error(error.message);
      }

}

export async function getShopAgents(shopId:string){
    try {
        const response = await fetch(`${BASE_URL}shopagents/shop/${shopId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
          },
        });
        const data = await response.json();
        if (data.statusCode === 500) {
          throw new Error(data.message);
        }
        if (response.status === 401) {
          throw new Error("You are not authorized to perform this action");
        }
        if (data.statusCode) {
          throw new Error(data.message);
        }
        return data;
      }catch (error: any) {
        throw new Error(error.message);
      }
}