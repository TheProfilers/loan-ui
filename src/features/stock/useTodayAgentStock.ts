import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTodayIndividualStock } from "../../services/apiStock";

export function useTodayAgentStock(){
    const {id} = useParams<{id:string}>()
    const {data:stock, error, isLoading} = useQuery({
        queryKey:["todayAgentStock"],
        queryFn: ()=>getTodayIndividualStock(id!)
    })
    return {stock, error, isLoading}
}