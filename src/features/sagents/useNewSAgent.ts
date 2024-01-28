import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { newSAgent } from "../../services/apiSAgent";

export function useNewSAgent() {
    const queryClient = useQueryClient();
    const {mutate,isPending}= useMutation({
        mutationFn:newSAgent,
        onSuccess:()=>{
            queryClient.invalidateQueries();
            Swal.fire({
                title:"Shop Agent created successfully",
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