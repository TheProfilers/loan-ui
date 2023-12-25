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