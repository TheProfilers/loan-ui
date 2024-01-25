import { ShopType } from "../types/ShopType";

const BASE_URL = "https://kalulu-857b24d77543.herokuapp.com/"


export async function newShop(shop:ShopType){
    try {
        const response = await fetch(`${BASE_URL}shop`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
          },
          body: JSON.stringify(shop),
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

export async function getShops(){
    try {
        const response = await fetch(`${BASE_URL}shop`, {
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