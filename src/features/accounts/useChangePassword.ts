import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { PasswordType, changePassword } from "../../services/apiAuth";

export function useChangePassword(){
    const {mutate,isPending} =useMutation({
        mutationFn:(passwordData: PasswordType)=>changePassword(passwordData),
        onSuccess:()=>{
            Swal.fire({
                icon:"success",
                title:"Password Changed successfully",
                toast:true,
                position:"top-right",
                showConfirmButton:false,
                timer:3000
            })
        },
        onError:(error:Error)=>{
            Swal.fire({
                icon:"error",
                title:error.message,
                toast:true,
                position:"top-right",
                showConfirmButton:false,
                timer:3000
            })
        }
    })
    return {mutate,isPending}
}