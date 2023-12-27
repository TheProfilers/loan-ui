import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { deleteLoan } from "../../services/loanapi";

export function useDeleteLoan(){
    const queryClient = useQueryClient();
    const {mutate,isPending} = useMutation({
        mutationFn:deleteLoan,
        onSuccess:()=>{
            queryClient.invalidateQueries();
            Swal.fire({
                icon:'success',
                title:'Loan deleted successfully'
            
            })
        },
        onError:(error:Error)=>{
            Swal.fire({
                icon:'error',
                title:'Oops...',
                text:error.message
            })
        }
    })
    return {mutate,isPending}
}