import { FloatType } from "../types/FloatType";

const BASE_URL = "https://kalulu-857b24d77543.herokuapp.com/"

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