import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { deleteLoanee } from "../../services/loaneesapi";

export function useDeleteLoanee(){
    const queryClient = useQueryClient();
    const {mutate,isPending}= useMutation({
        mutationFn:deleteLoanee,
        onSuccess:()=>{
            queryClient.invalidateQueries();
            Swal.fire({
                icon:"success",
                title:"Loanee deleted successfully",
                toast:true,
                position:"top-right",
                showConfirmButton:false,
                timer:3000
            })

        },
        onError:(error:Error)=>{
            Swal.fire({
                icon:"error",
                title:error.message,
                toast:true,
                position:"top-right",
                showConfirmButton:false,
                timer:3000
            })
        }
    });
    return {mutate,isPending};
}