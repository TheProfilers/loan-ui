import ColumnText from "../../ui/ColumnText";
import Loader from "../../ui/Loader";
import { useLoaneeLoans } from "../loans/useLoaneeLoans";
import { useLoaneeDetails } from "./useLoaneeDetails";

export default function LoaneeDetailsDisplay() {
    const {loanee, error, isLoading}= useLoaneeDetails()
    const {loans,loaneeError,isLoadingLoans} = useLoaneeLoans()
    if(isLoading && isLoadingLoans) return <Loader/>
    if(error || loaneeError) return error ? <div>{error.message}</div> : <div>{loaneeError!.message}</div>
    if(!loanee ) return <div>Something went wrong</div>
    //console.log(loanee)
    console.log(loans)
  return (
    <>
      <h3 className="font-medium text-lg my-3">Loanee Information</h3>
      <div className="shadow rounded-sm p-2">
        <ColumnText title="Email" text={loanee.email} />
        <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-8">
         
          <ColumnText title="First Name" text={loanee.firstName} />
          <ColumnText title="Last Name" text={loanee.lastName} />
          <ColumnText title="Phone" text={loanee.phoneNumber} />
          <ColumnText title="Limit" text={loanee.limit.toString()} />
          <ColumnText title="ID Number" text={loanee.idNumber} />
        </div>
      </div>
    </>
  );
}
