const BASE_URL = "https://fare-rate-api-2e26b3504be5.herokuapp.com/"

export interface PasswordType{
    id: string,
    newPassword: string
    
}

export async function changePassword(passwordData: PasswordType) {
   try {
    const { id, newPassword } = passwordData
    const response = await fetch(`${BASE_URL}auth/change/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newPassword })
    })
    return response.json()
   } catch (error:any) {
    throw new Error(error.message)
   }
}