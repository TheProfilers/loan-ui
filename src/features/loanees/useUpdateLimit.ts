import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { updateLoaneeLimit } from "../../services/loaneesapi";

export function useUpdateLimit(){
    const{id}= useParams<{id:string}>();
    const queryClient = useQueryClient();
    const{mutate,isPending} = useMutation({
        mutationFn: (limit:number)=>updateLoaneeLimit(id!,limit),
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