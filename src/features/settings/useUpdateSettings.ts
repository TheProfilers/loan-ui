import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { updateSettings } from "../../services/settingsapi";

export function useUpdateSettings(){
    const queryClient = useQueryClient();
    const{mutate,isPending} = useMutation({
        mutationFn:updateSettings,
        onSuccess:()=>{
            queryClient.invalidateQueries();
            Swal.fire({
                title:"Settings updated",
                icon:"success"

            })
        },
        onError:()=>{
            Swal.fire({
                title:"An Error occured",
                icon:"error"
            })
        }
    })
    return {mutate,isPending}
}