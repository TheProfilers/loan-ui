import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAgentLoans } from "../../services/loanapi";

export function useAgentLoans(){
    const{id} = useParams<{id:string}>()
    const {data,isLoading,error} = useQuery({
        queryKey:["agentLoans",id],
        queryFn:()=>getAgentLoans(id!)
    })
    return {data,isLoading,error}
}