import { useQuery } from "@tanstack/react-query";
import { getAllLoanees } from "../../services/loaneesapi";
import { LoaneesType } from "../../types/LoaneeType";

export function useAllLoanees() {
    const { data, isLoading, error } = useQuery<LoaneesType[], Error>({
        queryKey: ["loanees"],
        queryFn: getAllLoanees,
    });
    return { data, isLoading, error };
}