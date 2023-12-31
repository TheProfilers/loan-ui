import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { updateSettings } from "../../services/settingsapi";

export function useUpdateSettings(){
    const queryClient = useQueryClient();
    const{mutate,isPending} = useMutation({
        mutationFn:updateSettings,
        onSuccess:()=>{
            queryClient.invalidateQueries();
            Swal.fire({
                icon:"success",
                title:"Settings Updated successfully",
                toast:true,
                position:"top-right",
                showConfirmButton:false,
                timer:3000
            })
        },
        onError:(error:any)=>{
            console.log(error);
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