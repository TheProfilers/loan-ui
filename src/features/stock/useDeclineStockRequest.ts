import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { rejectStockRequest } from "../../services/apiStock";

export function useDeclineStockRequest(){
    const queryClient = useQueryClient();

    const {mutate:decline,isPending:isDeclining} = useMutation({
        mutationFn:rejectStockRequest,
        onSuccess:()=>{
            queryClient.invalidateQueries();
            Swal.fire({
                icon:"success",
                title:"Request Declined successfully",
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
    return {decline,isDeclining}
}