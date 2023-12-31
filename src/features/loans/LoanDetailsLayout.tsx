import { Link } from "react-router-dom";
import BackButton from "../../ui/BackButton";
import ColumnText from "../../ui/ColumnText";
import Loader from "../../ui/Loader";
import { formatCurrency, formatDate } from "../../utils/helpers";
import RepayLoanModal from "./RepayLoanModal";
import { useLoanDetails } from "./useLoanDetails";

export default function LoanDetailsLayout() {
 
  const { loan, error, isLoading } = useLoanDetails();
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p className="text-red-500">{error.message}</p>;
  }
  if (!loan) {
    return <p>No loan found</p>;
  }
  console.log(loan);
  return (
    <>
    <div className='actual-receipt'>
      
      <div className="flex justify-between">
        <BackButton />

        {loan.loanAmount !== loan.amountPaid && <RepayLoanModal />}
      </div>
      <h1 className="text-lg font-medium text-orange-500 uppercase">
        Loan Information
      </h1>

      <div className="flex justify-between items-start my-2">
      <ColumnText title="Date Borrowed" text={formatDate(loan.createdAt!)} />
      {loan.receivedBy && <ColumnText title="Date Paid" text={formatDate(loan.updatedAt!)} />}
      </div>
      <div className="flex justify-between shadow p-3">
        <div>
        
          <ColumnText title="Loan Amount" text={formatCurrency(loan.loanAmount).toString()} />
          <ColumnText title="Loan Reason" text={loan.loanReason} />
        </div>
        <div>
        
          <ColumnText
            title="Loan Balance"
            text={formatCurrency(loan.loanAmount - loan.amountPaid).toString()}
          />
          <ColumnText title="Amount Paid" text={formatCurrency(loan.amountPaid).toString()} />
        </div>
      </div>

      <h1 className="text-lg font-medium text-orange-500 uppercase">
        Loanee Information
      </h1>

     { loan.loanee ?  <div className="shadow grid grid-cols-2 md:grid-cols-4 gap-8 p-4 mt-2">
        <ColumnText title="First name" text={loan.loanee.firstName} />
        <ColumnText title="Last name" text={loan.loanee.lastName} />
        <ColumnText title="Id Number" text={loan.loanee.idNumber} />
        <ColumnText title="Phone Number" text={loan.loanee.phoneNumber} />
      </div> : <div>Not Available</div>}
      <h1 className="text-lg font-medium text-orange-500 uppercase py-1">
        Agent Information
      </h1>

      {loan.servedBy? <div className="shadow grid grid-cols-2 md:grid-cols-4 gap-8 p-4 mt-2">
        <ColumnText title="Full Name" text={loan.servedBy.name} />
        <ColumnText title="Phone Number" text={loan.servedBy.phone!} />
        <ColumnText title="Email" text={loan.servedBy.email} />
      </div> : <div>Not Available</div>}

     {loan.receivedBy && <>
     
      <h1 className="text-lg font-medium text-orange-500 uppercase py-1">
        Payment Recipient Details
      </h1>

      {loan.receivedBy ? <div className="shadow grid grid-cols-2 md:grid-cols-4 gap-8 p-4 mt-2">
        <ColumnText title="Full Name" text={loan.receivedBy.name} />
        <ColumnText title="Phone Number" text={loan.receivedBy.phone!} />
        <ColumnText title="Email" text={loan.receivedBy.email} />
      </div> : <div>Not Available</div>}
     </>}
     
      
    </div>
    <Link to={`/download/${loan._id}`} className="btn btn-primary">DownLoad Link</Link>
    </>
  );
}
