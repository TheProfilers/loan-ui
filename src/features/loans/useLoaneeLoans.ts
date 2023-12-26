import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getLoaneeLoans } from "../../services/loanapi";
import { LoanType } from "../../types/LoanType";

export function useLoaneeLoans(){
    const {id} = useParams<{id:string}>()
    const{data:loans,error:loaneeError,isLoading:isLoadingLoans} = useQuery<LoanType[],Error>({
        queryKey:["loaneeLoans"],
        queryFn: ()=>getLoaneeLoans(id!)
    })
    return {loans,loaneeError,isLoadingLoans}
}