
const BASE_URL = "https://kalulu-857b24d77543.herokuapp.com/"
export async function getTodayIndividualStock(id:string){
    try {
        const response = await fetch(`${BASE_URL}stock/agent/today/${id}`, {
          
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
export interface IStock{
  amount:number,
  belongsTo:string,
  status:string,
}
export async function assignStockToAgent(stock:IStock){
    try {
        const response = await fetch(`${BASE_URL}stock/new`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
          },
          body: JSON.stringify(stock),
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

export interface IStockReAssign{
  id:string,
  amount:number,
  
}

export async function reAssignStockToAgent({id,amount}:IStockReAssign){
  try {
      const response = await fetch(`${BASE_URL}stock/reassign/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
        },
        body: JSON.stringify({amount}),
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

export interface IStockRequest{
  stockId:string,
  amountRequested:number,
  status:string,
  requester:string,
  reciever:string,
}

// export async function requestMoreStock(stockRequest:IStockRequest){
//     try {
//         const response = await fetch(`${BASE_URL}stock/request/${stockRequest.id}`, {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
//           },
//           body: JSON.stringify(stockRequest),
//         });
//         const data = await response.json();
//         if (data.statusCode === 500) {
//           throw new Error(data.message);
//         }
//         if (response.status === 401) {
//           throw new Error("You are not authorized to perform this action");
//         }
//         if (data.statusCode) {
//           throw new Error(data.message);
//         }
//         return data;
//       }catch (error: any) {
//         throw new Error(error.message);
//       }

// }
export interface StockApproval{
  id:string,
  status:string,

}

export async function approveStockRequest({id,status}:StockApproval){
    try {
        const response = await fetch(`${BASE_URL}stock/request/accept/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
          },
          body: JSON.stringify({status}),
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

export async function rejectStockRequest({id,status}:StockApproval){
  try {
      const response = await fetch(`${BASE_URL}stock/request/decline/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
        },
        body: JSON.stringify({status}),
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



