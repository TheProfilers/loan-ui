import { Link } from 'react-router-dom';
import { LoaneTypes } from '../../types/LoanTypes';
import ColumnText from '../../ui/ColumnText';
import Loader from '../../ui/Loader';
import { formatCurrency } from '../../utils/helpers';
import { useAgentLoans } from './useAgentsLoans';

export default function AgentLoan() {
    const {data,isLoading,error} = useAgentLoans()
    
    if(isLoading) return <Loader/>
    if(error) return <div className="my-3 px-4 text-sm text-red-600 font-medium">{error.message}</div>
    if(!data) return <div>Something went wrong</div>
     const totalAmount = data.reduce((acc:number,loan:LoaneTypes)=>acc+loan.totalLoanAmount!,0)
    // const totalLoansAmount = allLoans.reduce((acc:number,loan:LoaneTypes)=>acc+loan.loanAmount!,0)
    // if(!loanee) return <div>Something went wrong</div>
    //console.log(loans)

    const activeLoans = data.filter((loan:LoaneTypes)=>loan.totalLoanAmount !== 0)
  
  return (
    <>
   
    
    <div className="shadow p-4 rounded-sm">
    <ColumnText title="Total Loans" text={activeLoans.length.toString()}/>
    <div className="flex justify-between">
    <ColumnText title="Total Amount" text={formatCurrency(totalAmount).toString()}/>
    
    </div>
    </div>
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>Borrower:</th>
            
              <th>Date</th>
              <th>Reason</th>
              <th>Amount</th>
              <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {
            activeLoans.map((loan:LoaneTypes,index:number)=>(
              <tr key={index}>
                <td>{loan.loanee?.firstName} {loan.loanee?.lastName}</td>
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
