import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { deleteAgent } from "../../services/shopagentapi";

export function useDeleteShopAgent(){
    const queryClient=useQueryClient();
    const{mutate,isPending}=useMutation({
        mutationFn:deleteAgent,
        onSuccess:()=>{
            queryClient.invalidateQueries();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        },
        onError:(error:any)=>{
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: error.message,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
    return {mutate,isPending}
}