
const BASE_URL = "http://localhost:3000/";
export async function getAllLoanees() {
  try {
    const response = await fetch(`${BASE_URL}loanee/all`, {
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
    if(data.statusCode){
        throw new Error(data.message);
    }
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}