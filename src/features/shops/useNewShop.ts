import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { newShop } from "../../services/apiShops";

export function useNewShop(){
    const queryClient = useQueryClient();
    const{mutate,isPending} = useMutation({
        mutationFn:newShop,
        onSuccess:()=>{
            queryClient.invalidateQueries()
            Swal.fire({
                title:"Shop created successfully",
                icon:"success",
                timer:2000,
                showConfirmButton:false,
                toast:true,
            
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