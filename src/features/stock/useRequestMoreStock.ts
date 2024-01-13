import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { requestMoreStock } from "../../services/apiStock";

export function useRequestMoreStock(){
const queryClient = useQueryClient();
const {mutate,isPending} = useMutation({
    mutationFn:requestMoreStock,
    onSuccess:()=>{
        queryClient.invalidateQueries();
        Swal.fire({
            icon:"success",
            title:"Stock Requested successfully",
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