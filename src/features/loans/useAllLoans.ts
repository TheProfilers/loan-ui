import { useQuery } from "@tanstack/react-query";
import { getAllLoans } from "../../services/loanapi";
import { LoaneTypes } from "../../types/LoanTypes";

export function useAllLoans() {
    const { data, isLoading, error } = useQuery<LoaneTypes[],Error>({
        queryKey: ["loans"],
        queryFn: getAllLoans
    });
    return { data, isLoading, error };
}