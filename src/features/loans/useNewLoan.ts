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
                icon:"success",
                title:"Loan awarded successfully",
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