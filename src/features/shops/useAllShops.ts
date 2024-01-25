import { useQuery } from "@tanstack/react-query";
import { getShops } from "../../services/apiShops";
import { ShopType } from "../../types/ShopType";

export function useAllShops() {
    const { data:shops, isLoading:isLoadingShops, error:errorShops } = useQuery<ShopType[],Error>({
        queryKey:["shops"],
        queryFn:getShops
    })
    return {shops,isLoadingShops,errorShops}
}