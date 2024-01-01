import { BsFillPeopleFill, BsFillPersonCheckFill } from "react-icons/bs";

import { LoaneTypes } from "../../types/LoanTypes";
import Loader from "../../ui/Loader";
import { formatCurrency } from "../../utils/helpers";
import { useAllLoanees } from "../loanees/useAllLoanees";
import { useAllLoans } from "../loans/useAllLoans";
import { useShopAgents } from "../shop_agents/useShopAgents";
import HomeCard from "./HomeCard";
import HomeGraph from "./HomeGraph";

export default function HomeLayout() {
  const {data:loans,isLoading,error} = useAllLoans();
  const { data:loanees, isLoading:isLoadingLoanees, error:loaneeError } = useAllLoanees()
 const {data:agents,isLoading:isLoadingAgents,error:aErro} = useShopAgents()
 //const {recentLoans,isFetching,err,numDays} = useLoansAfterDate()
  if(isLoading || isLoadingLoanees || isLoadingAgents) return <Loader/>
  if(error || loaneeError || aErro ) return <div>{error?.message}</div>
  if(!loans || !loanees || !agents) return <div>Something went wrong</div>
  const totalLoanAmount = loans.reduce((acc:number,loan:LoaneTypes)=>acc+loan.totalLoanAmount!,0)
  
  return (
    <>
    <div className="flex justify-between items-start mt-4">
        <h1 className="font-bold text-lg">Dashboard</h1>

        {/* <FilterComponent param="last" options={options} /> */}
      </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <HomeCard title="Agents" value={agents.length.toString()} >
        <span className="text-3xl"><BsFillPeopleFill /></span>
        </HomeCard>
        <HomeCard title="Loanees" value={loanees.length.toString()} >
        <span className="text-3xl"><BsFillPersonCheckFill /></span>
        </HomeCard>
        <HomeCard title="Loans" value={formatCurrency(totalLoanAmount).toString()} >
        <span className="text-3xl">$</span>
        </HomeCard>
        
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
            <HomeGraph loans={loans} numDays={10} />
        </div>
    </>
  )
}
