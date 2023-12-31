import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { deleteAgent } from "../../services/shopagentapi";

export function useDeleteShopAgent(){
    const queryClient=useQueryClient();
    const{mutate,isPending}=useMutation({
        mutationFn:deleteAgent,
        onSuccess:()=>{
            queryClient.invalidateQueries();
            Swal.fire({
                icon:"success",
                title:"Agent deleted successfully",
                toast:true,
                position:"top-right",
                showConfirmButton:false,
                timer:3000
            })
        },
        onError:(error:any)=>{
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