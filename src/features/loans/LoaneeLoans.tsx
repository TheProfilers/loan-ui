import { LoanType } from "../../types/LoanType"
import ColumnText from "../../ui/ColumnText"
import Loader from "../../ui/Loader"
import NewLoanModal from "./NewLoanModal"
import { useLoaneeLoans } from "./useLoaneeLoans"

export default function LoaneeLoans() {
    const {loans,loaneeError,isLoadingLoans} = useLoaneeLoans()
    
    if(isLoadingLoans) return <Loader/>
    if(loaneeError) return <div className="my-3 px-4 text-sm text-red-600 font-medium">{loaneeError.message}</div>
    if(!loans) return <div>Something went wrong</div>
    const totalAmount = loans.reduce((acc:number,loan:LoanType)=>acc+loan.loanAmount,0)
    console.log(loans)
  return (
    <>
    <div className="flex justify-end mt-3">
    <NewLoanModal/>
    </div>
    <div className="shadow p-4 rounded-sm">
    <ColumnText title="Total Loans" text={loans.length.toString()}/>
    <ColumnText title="Total Amount of Loan" text={totalAmount.toString()}/>
   
    </div>
    {
        loans.map((loan:LoanType,index)=>(
            <div key={index} className="grid grid-cols-1 mt-3 shadow px-4">
            <ColumnText title="Loan Amount" text={loan.loanAmount.toString()}/>
            <ColumnText title="Loan Reason" text={loan.loanReason}/>
            
            </div>
        ))
    }
    </>
  )
}
