import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { reAssignStockToAgent } from "../../services/apiStock";

export function useReassignStock() {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationFn: reAssignStockToAgent,
        onSuccess: () => {
            queryClient.invalidateQueries();
            Swal.fire({
                icon: "success",
                title: "Stock reassigned successfully",
                toast: true,
                position: "top-right",
                showConfirmButton: false,
                timer: 3000
            })
        },
        onError: (error: any) => {
            Swal.fire({
                icon: "error",
                title: error.message,
                toast: true,
                position: "top-right",
                showConfirmButton: false,
                timer: 3000
            })
        }
    })
    return { mutate, isPending }
}