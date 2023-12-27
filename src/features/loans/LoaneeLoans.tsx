import { Link } from "react-router-dom"
import { LoanType } from "../../types/LoanType"
import ColumnText from "../../ui/ColumnText"
import Loader from "../../ui/Loader"
import { useLoaneeDetails } from "../loanees/useLoaneeDetails"
import NewLoanModal from "./NewLoanModal"
import { useLoaneeLoans } from "./useLoaneeLoans"

export default function LoaneeLoans() {
    const {loans,loaneeError,isLoadingLoans} = useLoaneeLoans()
    const {loanee}= useLoaneeDetails()
    if(isLoadingLoans) return <Loader/>
    if(loaneeError) return <div className="my-3 px-4 text-sm text-red-600 font-medium">{loaneeError.message}</div>
    if(!loans) return <div>Something went wrong</div>
    const totalAmount = loans.reduce((acc:number,loan:LoanType)=>acc+loan.loanAmount,0)
    if(!loanee) return <div>Something went wrong</div>
    console.log(loans)
  return (
    <>
    <div className="flex justify-end mt-3">
    {(totalAmount < loanee?.limit - 1) && <NewLoanModal/>}
    </div>
    <div className="shadow p-4 rounded-sm">
    <ColumnText title="Total Loans" text={loans.length.toString()}/>
    <ColumnText title="Total Amount of Loan" text={totalAmount.toString()}/>
   
    </div>
    <h1 className="my-2 px-3 text-lg font-medium uppercase text-orange-500">Loans Distribution</h1>
    {
        loans.map((loan:LoanType,index)=>(
            <Link to={`/loans/${loan._id}`} key={index} className="grid grid-cols-1 mt-3 shadow px-4">
            <ColumnText title="Loan Amount" text={loan.loanAmount.toString()}/>
            <ColumnText title="Loan Reason" text={loan.loanReason}/>
            
            </Link>
        ))
    }
    </>
  )
}
