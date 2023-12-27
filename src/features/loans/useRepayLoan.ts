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
                title:'Success',
                text:'Loan repaid successfully',
                icon:'success',
                confirmButtonText:'Ok'
            })
           
        },
        onError:()=>{
            Swal.fire({
                title:'Error',
                text:'An error occured',
                icon:'error',
                confirmButtonText:'Ok'
            })
        }
    })
    return {mutate,isPending}
}