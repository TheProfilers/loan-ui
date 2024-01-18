import { useQuery } from "@tanstack/react-query";
import { getStockRequests } from "../../services/apiRequests";
import { RequestType } from "../../types/RequestType";

export function useTodayStockExchange(){
   
    const {data:requests, error:todayError, isLoading:isGettingToday} = useQuery<RequestType[],Error>({
        queryKey:["todayStockExchange"],
        queryFn: ()=>getStockRequests()
    
    })
    return {requests, todayError, isGettingToday}
}