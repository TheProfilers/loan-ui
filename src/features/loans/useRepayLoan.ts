import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { repayLoan } from "../../services/loanapi";

export function useRepayLoan(){
    const queryClient = useQueryClient();
    const {id} = useParams<{id:string}>()
    const {mutate,isPending} = useMutation({
        mutationFn:(amount:number)=>repayLoan(id!,amount),
        onSuccess:()=>{
            queryClient.invalidateQueries();
            Swal.fire({
                icon:"success",
                title:"Loan Repaid successfully",
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