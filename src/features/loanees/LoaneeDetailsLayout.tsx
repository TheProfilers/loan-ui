import BackButton from '../../ui/BackButton'
import LoaneeDetailsDisplay from './LoaneeDetailsDisplay'

export default function LoaneeDetailsLayout() {
  return (
    <>
    <div className="flex justify-between">
    <BackButton/>
    <h3 className="text-xl font-medium">Loanee Details</h3>
    </div>
    <LoaneeDetailsDisplay/>
    </>
  )
}
