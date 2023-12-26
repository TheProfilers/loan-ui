import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { addLoanee } from "../../services/loaneesapi";

export function useNewLoanee(){
    const queryClient = useQueryClient();
    const {mutate,isPending}= useMutation({
        mutationFn:addLoanee,
        onSuccess:()=>{
            queryClient.invalidateQueries();
            Swal.fire({
                icon:"success",
                title:"Loanee added successfully",
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