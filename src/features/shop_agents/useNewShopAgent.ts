import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { newAgent } from "../../services/shopagentapi";

export function useNewShopAgent(){
    const queryClient = useQueryClient();
    const {mutate,isPending} = useMutation({
        mutationFn:newAgent,
        onSuccess:()=>{
            queryClient.invalidateQueries();
            Swal.fire({
                icon:"success",
                title:"Agent added successfully",
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