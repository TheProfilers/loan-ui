import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/AuthContext";
import { getAgentLoans } from "../../services/loanapi";

export function useAccountsLoans(){
    const {storedUser}= useAuth()
    const {data,isLoading,error} = useQuery({
        queryKey:["accountsLoans",storedUser!.id],
        queryFn:()=>getAgentLoans(storedUser!.id!)
    })
    return {data,isLoading,error}
   
}