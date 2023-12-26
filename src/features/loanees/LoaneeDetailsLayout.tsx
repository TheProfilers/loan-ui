import BackButton from '../../ui/BackButton'
import LoaneeLoans from '../loans/LoaneeLoans'
import LoaneeDetailsDisplay from './LoaneeDetailsDisplay'

export default function LoaneeDetailsLayout() {
  

  return (
    <>
    <div className="flex justify-between">
    <BackButton/>
    <h3 className="text-xl font-medium">Loanee Details</h3>
    </div>
    <LoaneeDetailsDisplay/>
    <h1 className='font-medium text-lg px-4 uppercase mt-3'>Loanee Loans</h1>
    <LoaneeLoans/>
    </>
  )
}
