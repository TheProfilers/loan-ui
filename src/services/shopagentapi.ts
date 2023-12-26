import { UserTypes } from "../types/UserTypes";

const BASE_URL = "http://localhost:3000/";

export async function getAllAgents() {
  try {
    const response = await fetch(`${BASE_URL}users`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
      },
    });
   
    if (response.status === 401) {
      throw new Error("You are not authorized to perform this action");
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function newAgent(userData: UserTypes) {
  try {
    const response = await fetch(`${BASE_URL}auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (data.statusCode === 500) {
      throw new Error(data.message);
    }
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function deleteAgent(id: string) {
    try {
        const response = await fetch(`${BASE_URL}users/delete/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
        },
        });
        const data = await response.json();
        if (data.statusCode === 500) {
        throw new Error(data.message);
        }
        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function getAgentDetails(id: string) {
    try {
        const response = await fetch(`${BASE_URL}users/${id}`, {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
        },
        });
        const data = await response.json();
        if (data.statusCode === 500) {
        throw new Error(data.message);
        }
        if(data.statusCode===404){
            throw new Error(data.message);
        }
        if(data.statusCode){
            throw new Error(data.message);
        }
        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}