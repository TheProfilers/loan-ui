import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { newLoan } from "../../services/loanapi";

export function useNewLoan(){
    const queryClient = useQueryClient()
    const {mutate,isPending} = useMutation({
        mutationFn:newLoan,
        onSuccess:()=>{
            queryClient.invalidateQueries();
            Swal.fire({
                title:'Success',
                text:'Loan created successfully',
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