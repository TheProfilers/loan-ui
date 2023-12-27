import BackButton from "../../ui/BackButton";
import ColumnText from "../../ui/ColumnText";
import Loader from "../../ui/Loader";
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
      <div className="flex justify-between">
        <BackButton />

        {loan.loanAmount !== 0 && <RepayLoanModal />}
      </div>
      <h1 className="text-lg font-medium text-orange-500 uppercase">
        Loan Information
      </h1>

      <div className="grid grid-cols-1 shadow p-3">
      <ColumnText title="Loan Amount" text={loan.loanAmount.toString()} />
      <ColumnText title="Loan Reason" text={loan.loanReason} />
      </div>

      <h1 className="text-lg font-medium text-orange-500 uppercase">
        Loanee Information
      </h1>

      <div className="shadow grid grid-cols-2 md:grid-cols-4 gap-8 p-4 mt-2">
        <ColumnText title="First name" text={loan.loanee.firstName} />
        <ColumnText title="Last name" text={loan.loanee.lastName} />
        <ColumnText title="Id Number" text={loan.loanee.idNumber} />
        <ColumnText title="Phone Number" text={loan.loanee.phoneNumber} />
      </div>
      <h1 className="text-lg font-medium text-orange-500 uppercase py-1">
        Agent Information
      </h1>

      <div className="shadow grid grid-cols-2 md:grid-cols-4 gap-8 p-4 mt-2">
        <ColumnText title="Full Name" text={loan.servedBy.name} />
        <ColumnText title="Phone Number" text={loan.servedBy.phone!} />
        <ColumnText title="Email" text={loan.servedBy.email} />
        
      </div>
    </>
  );
}
