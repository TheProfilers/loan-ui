import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { deleteLoan } from "../../services/loanapi";

export function useDeleteLoan(){
    const queryClient = useQueryClient();
    const {mutate,isPending} = useMutation({
        mutationFn:(id:string)=>deleteLoan(id),
        onSuccess:()=>{
            queryClient.invalidateQueries();
            Swal.fire({
                icon:"success",
                title:"Loan deleted successfully",
                toast:true,
                position:"top-right",
                showConfirmButton:false,
                timer:3000
            })
        },
        onError:(error:Error)=>{
            console.log(error)
            Swal.fire({
                icon:'error',
                title:'Oops...',
                text:error.message
            })
        }
    })
    return {mutate,isPending}
}