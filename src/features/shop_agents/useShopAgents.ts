import { useQuery } from "@tanstack/react-query";
import { getAllAgents } from "../../services/shopagentapi";
import { UserTypes } from "../../types/UserTypes";

export function useShopAgents(){
    const{data,isLoading,error}=useQuery<UserTypes[],Error>({
        queryKey:["shopAgents"],
        queryFn:getAllAgents
    })
    return {data,isLoading,error}
}