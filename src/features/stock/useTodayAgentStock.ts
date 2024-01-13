import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTodayIndividualStock } from "../../services/apiStock";
import { StockType } from "../../types/StockType";

export function useTodayAgentStock(){
    const {id} = useParams<{id:string}>()
    const {data:stock, error, isLoading} = useQuery<StockType[],Error>({
        queryKey:["todayAgentStock"],
        queryFn: ()=>getTodayIndividualStock(id!)
    })
    return {stock, error, isLoading}
}