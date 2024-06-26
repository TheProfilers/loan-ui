import { IStockRequest } from "./apiStock";

const BASE_URL = "https://fare-rate-api-2e26b3504be5.herokuapp.com/"

export async function requestMoreStock(stockRequest:IStockRequest){
    try {
        const response = await fetch(`${BASE_URL}requests/request`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
          },
          body: JSON.stringify(stockRequest),
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

export async function getStockTodayRequests(id:string){
    try {
        const response = await fetch(`${BASE_URL}requests/today/${id}`, {
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

export async function getTodayRequesterRequests(id:string){
  try {
      const response = await fetch(`${BASE_URL}requests/requester/${id}`, {
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

export async function getStockRequests(){
    try {
        const response = await fetch(`${BASE_URL}requests`, {
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

export async function approveStocRequest(id:string){
    try {
        const response = await fetch(`${BASE_URL}requests/approve/${id}`, {
          method: "PATCH",
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
export async function declineStocRequest(id:string){
    try {
        const response = await fetch(`${BASE_URL}requests/reject/${id}`, {
          method: "PATCH",
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