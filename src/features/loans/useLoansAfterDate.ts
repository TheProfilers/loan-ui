import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";

import { getLoansAfterDate } from "../../services/loanapi";
import { LoanType } from "../../types/LoanType";

export function useLoansAfterDate() {
    const [searchParams]=useSearchParams();
    const numDays = !searchParams.get("last") ? 7 : Number(searchParams.get("last"));
    const queryDate = subDays(new Date(), numDays).toISOString();
    const {data:recentLoans,isLoading:isFetching,error:err}=useQuery<LoanType[],Error>({
        queryKey:["loans",queryDate],
        queryFn:()=>getLoansAfterDate(queryDate),

    })
    console.log(err)
    return {recentLoans,isFetching,err,numDays};
}