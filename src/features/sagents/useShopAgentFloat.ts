import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getShopAgentFloats } from "../../services/apifloat";
import { FloatType } from "../../types/FloatType";

export function useShopAgentFloat(){
    const{id} = useParams<{id:string}>()
    const {data:floats,isLoading:loadingFloats,error:errorFloats} = useQuery<FloatType[],Error>({
        queryKey:["floats"],
        queryFn:()=>getShopAgentFloats(id!)
    })
    return {floats,loadingFloats,errorFloats}
}