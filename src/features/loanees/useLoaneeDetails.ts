import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getLoaneeById } from "../../services/loaneesapi";
import { LoaneesType } from "../../types/LoaneeType";

export function useLoaneeDetails(){
    const {id} = useParams<{id:string}>();
    const {data:loanee, error, isLoading} = useQuery<LoaneesType,Error>({
        queryKey:["loanee", id],
        queryFn:()=>getLoaneeById(id!)
    });
    return {loanee, error, isLoading};
}