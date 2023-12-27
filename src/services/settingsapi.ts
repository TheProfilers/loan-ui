
const BASE_URL = "http://localhost:3000/";

export async function getSettings(){
    try {
        const response = await fetch(`${BASE_URL}settings`, {
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

export interface UpdateSettingsType {
    id: string;
    loansLimit: number;

}


export async function updateSettings(updateData:UpdateSettingsType){
    const {id,...settings} = updateData;
    try {
        const response = await fetch(`${BASE_URL}settings/update/${id}`, {
          method:"PATCH",
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
            "Content-Type":"application/json"
          },
          body:JSON.stringify(settings)
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