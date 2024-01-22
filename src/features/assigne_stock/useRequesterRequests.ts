import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTodayRequesterRequests } from "../../services/apiRequests";
import { RequestType } from "../../types/RequestType";

export function useRequesterRequests(){
    const {id} = useParams<{id:string}>();
    const {data,isLoading,error} = useQuery<RequestType[],Error>({
        queryKey:["requesterRequests"],
        queryFn:()=>getTodayRequesterRequests(id!)
    })
    return {data,isLoading,error}
}