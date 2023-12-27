import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getLoanById } from "../../services/loanapi";
import { LoaneTypes } from "../../types/LoanTypes";

export function useLoanDetails(){
    const {id} = useParams<{id:string}>()
    const {data:loan,error,isLoading}= useQuery<LoaneTypes,Error>({
        queryKey:['loan',id],
        queryFn:()=>getLoanById(id!)
    })
    return {loan,error,isLoading}
}