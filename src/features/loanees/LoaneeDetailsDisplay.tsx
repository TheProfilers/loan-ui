import { useAuth } from "../../context/AuthContext";
import Loader from "../../ui/Loader";
import { formatCurrency } from "../../utils/helpers";
import UpdateLoaneeLimit from "./UpdateLoaneeLimit";
import { useLoaneeDetails } from "./useLoaneeDetails";

export default function LoaneeDetailsDisplay() {
    const {loanee, error, isLoading}= useLoaneeDetails()
    const{storedUser} = useAuth();
   
    if(isLoading) return <Loader/>
    if(error ) return  <div>{error.message}</div> 
    if(!loanee ) return <div>Something went wrong</div>
   
  return (
    <>
      <div className="flex justify-between">
      <h3 className="font-medium text-lg my-3 text-orange-500">Borrower Information</h3>
     {storedUser?.role === 'admin' && <UpdateLoaneeLimit />}
      </div>
      <div className="shadow rounded-sm p-2">
        <div className="overflow-x-auto">
          <table className="table sm:table-xs">
          <thead>
            <tr>
              <th>Borrower</th>
              <th>Id No.</th>
              <th>Phone</th>
              <th>Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{loanee.firstName} {loanee.lastName}</td>
              <td>{loanee.idNumber}</td>
              <td>{loanee.phoneNumber}</td>
              <td>{formatCurrency(loanee.limit)}</td>
            </tr>
          </tbody>
          </table>
        </div>
       
      </div>
    </>
  );
}
