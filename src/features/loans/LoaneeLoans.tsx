import { Link } from "react-router-dom"
import { LoaneTypes } from "../../types/LoanTypes"
import ColumnText from "../../ui/ColumnText"
import Loader from "../../ui/Loader"
import { formatCurrency } from "../../utils/helpers"
import { useLoaneeDetails } from "../loanees/useLoaneeDetails"
import { useSettings } from "../settings/useSettings"
import NewLoanModal from "./NewLoanModal"
import { useAllLoans } from "./useAllLoans"
import { useLoaneeLoans } from "./useLoaneeLoans"

export default function LoaneeLoans() {
  
    const {loans,loaneeError,isLoadingLoans} = useLoaneeLoans()
    const { data:allLoans} = useAllLoans();
    const {data} = useSettings()
    const {loanee}= useLoaneeDetails()
    if(isLoadingLoans) return <Loader/>
    if(loaneeError) return <div className="my-3 px-4 text-sm text-red-600 font-medium">{loaneeError.message}</div>
    if(!loans || !allLoans || !data) return <div>Something went wrong</div>
    const totalAmount = loans.reduce((acc:number,loan:LoaneTypes)=>acc+loan.totalLoanAmount!,0)
    const totalLoansAmount = allLoans.reduce((acc:number,loan:LoaneTypes)=>acc+loan.totalLoanAmount!,0)
    if(!loanee) return <div>Something went wrong</div>
    //console.log(loans)

    const activeLoans = loans.filter((loan:LoaneTypes)=>loan.totalLoanAmount !== 0)
    console.log(activeLoans)
   // const uniqueAgent = [...new Set(loans.map((loan:LoaneTypes)=>loan.servedBy.name!))]
    
    // const formattedLoans = uniqueAgent.map((agentId:string)=>({
    //   agentId,
    //   loans:loans.filter((loan:LoaneTypes)=>loan.servedBy.name === agentId)
    // }))
    // console.log(formattedLoans)
  return (
    <>
   {data.loansLimit > totalLoansAmount && <div className="flex justify-end mt-3">
    {(totalAmount < loanee?.limit - 1) && <NewLoanModal/>}
    </div>}
    
    <div className="shadow p-4 rounded-sm">
    <ColumnText title="Total Loans" text={activeLoans.length.toString()}/>
    <div className="flex justify-between">
    <ColumnText title="Total Amount" text={formatCurrency(totalAmount).toString()}/>
    <ColumnText title="Available Limit" text={formatCurrency(loanee.limit - totalAmount).toString()}/>
    </div>
    </div>
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>Served By:</th>
            
              <th>Date</th>
              <th>Reason</th>
              <th>Amount</th>
              <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {
            activeLoans.map((loan:LoaneTypes,index)=>(
              <tr key={index}>
                { loan.servedBy ? <td>{loan.servedBy.name!}</td> : <td>Not Available</td>}
                <td>{new Date(loan.createdAt!).toLocaleString()}</td>
                <td>{loan.loanReason}</td>
                <td>{loan.loanAmount}</td>
                <td>
                  <Link to={`/loans/${loan._id}`} className="text-green-500" >View</Link>
                </td>
              </tr>
            ))
          }
        
        </tbody>
      </table>
    </div>
   
    </>
  )
}
