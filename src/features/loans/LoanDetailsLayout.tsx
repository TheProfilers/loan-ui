import { Link } from "react-router-dom";
import BackButton from "../../ui/BackButton";
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
      <div className="actual-receipt">
        <div className="flex justify-between">
          <BackButton />

          {loan.loanAmount !== loan.amountPaid && <RepayLoanModal />}
        </div>
        <h1 className="text-sm font-medium text-orange-500 uppercase my-2">
          Borrower Information
        </h1>
        {loan.loanee ? (
          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Id No.</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {loan.loanee.firstName} {loan.loanee.firstName}
                  </td>
                  <td>{loan.loanee.idNumber}</td>
                  <td>{loan.loanee.phoneNumber}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div>Not Available</div>
        )}
        <h1 className="text-sm font-medium text-orange-500 uppercase my-2">
          Loan Information
        </h1>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>Loan Amount</th>
                <th>Date Borrowed</th>
                <th>Loan Reason</th>
                <th>Amount Paid</th>
                <th>Date Paid</th>
                <th>Loan Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{formatCurrency(loan.loanAmount).toString()}</td>
                <td>{formatDate(loan.createdAt!)}</td>
                <td>{loan.loanReason}</td>
                <td>{formatCurrency(loan.amountPaid).toString()}</td>
                {loan.receivedBy ? (
                  <td>{formatDate(loan.updatedAt!)}</td>
                ) : (
                  <td>Not Paid</td>
                )}
                <td>
                  {formatCurrency(loan.loanAmount - loan.amountPaid).toString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h1 className="text-sm font-medium text-orange-500 uppercase py-1 my-2">
          Served By
        </h1>

        {loan.servedBy ? (
          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{loan.servedBy.name}</td>
                  <td>{loan.servedBy.phone}</td>
                  <td>{loan.servedBy.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div>Not Available</div>
        )}

        <h1 className="text-sm font-medium text-orange-500 uppercase py-1 my-2">
          Payment Recipient Details
        </h1>

        {loan.receivedBy ? (
          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{loan.receivedBy.name}</td>
                  <td>{loan.receivedBy.phone}</td>
                  <td>{loan.receivedBy.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div>Not Available</div>
        )}
      </div>
      <Link to={`/download/${loan._id}`} className="btn btn-primary">
        DownLoad Link
      </Link>
    </>
  );
}
