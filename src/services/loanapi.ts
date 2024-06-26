import { LoanType } from "../types/LoanType";

// const BASE_URL = "http://localhost:3000/";
const BASE_URL = "https://fare-rate-api-2e26b3504be5.herokuapp.com/"

export async function getLoaneeLoans(loanee:string){
    try {
        const response = await fetch(`${BASE_URL}loans/loanee/${loanee}`, {
          
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
      } catch (error: any) {
        throw new Error(error.message);
      }


}
export async function getLoanById(id: string) {
  try {
    const response = await fetch(`${BASE_URL}loans/loan/${id}`, {
      headers: {
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
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function newLoan(loan: LoanType) {
  try {
    const response = await fetch(`${BASE_URL}loans/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
      },
      body: JSON.stringify(loan),
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
  } catch (error: any) {
    throw new Error(error.message);
  }
}
export interface RepayLoanType{
  amountPaid:number
  receivedBy:string
}

export async function repayLoan(id: string, repayData: RepayLoanType) {
  try {
    console.log(repayData)
    const response = await fetch(`${BASE_URL}loans/pay/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
      },
      body: JSON.stringify(repayData),
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
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getAllLoans() {
  try {
    const response = await fetch(`${BASE_URL}loans/all`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
      },
    });
    const data = await response.json();
    console.log(data)
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
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function deleteLoan(id: string) {
  try {
    const response = await fetch(`${BASE_URL}loans/loan/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
      },
    });
   
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getLoansAfterDate(date:string){
  try {
    const response = await fetch(`${BASE_URL}loans/afterloans`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
        query: date
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
  } catch (error: any) {
    throw new Error(error.message);
  }
}


export async function getAgentLoans(agent:string){
  try {
      const response = await fetch(`${BASE_URL}loans/servedBy/${agent}`, {
        
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
    } catch (error: any) {
      throw new Error(error.message);
    }


}