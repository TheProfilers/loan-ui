import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getShopAgents } from "../../services/apiSAgent";
import { SAgentType } from "../../types/SAgentTypes";

export function useShopSAgent(){
    const {id} = useParams<{id:string}>();
    const {data:sgents,isLoading:isLoadingSAgents,error:sError}=useQuery<SAgentType[],Error>({
        queryKey:["sagents"],
        queryFn:()=>getShopAgents(id!)
    })
    return {sgents,isLoadingSAgents,sError}
}