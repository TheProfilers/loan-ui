import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { newFloat } from "../../services/apifloat";

export function useNewAgentFloat(){
    const queryClient = useQueryClient();
    const {mutate,isPending} = useMutation({
        mutationFn:newFloat,
        onSuccess:()=>{
            queryClient.invalidateQueries()
            Swal.fire({
                title:"Float created successfully",
                icon:"success",
                timer:2000,
                showConfirmButton:false,
                toast:true,
                position:"top-right"
            
            })
        },
        onError:(error:Error)=>{
            Swal.fire({
                title:error.message,
                icon:"error",
                toast:true,
                timer:2000,
                showConfirmButton:false,
                position:"top-right"

            })
        }
    })
    return {mutate,isPending}
}