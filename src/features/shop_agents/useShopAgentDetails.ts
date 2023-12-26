import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAgentDetails } from "../../services/shopagentapi";
import { UserTypes } from "../../types/UserTypes";

export function useShopAgentDetails() {
    const {id} = useParams()
    const { data, isLoading, error } = useQuery<UserTypes,Error>({
        queryKey: ["shopAgentDetails", id],
        queryFn: ()=>getAgentDetails(id!)
    });
    return { data, isLoading, error };
}