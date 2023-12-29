import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useAuth } from '../../context/AuthContext';
import { RepayLoanType } from '../../services/loanapi';
import ReusableModal from '../../ui/ReusableModal';
import { useLoanDetails } from './useLoanDetails';
import { useRepayLoan } from './useRepayLoan';

export default function RepayLoanModal() {
  const {storedUser} = useAuth();
  const{loan} = useLoanDetails();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const {mutate,isPending} = useRepayLoan();
  const handleRepayLoan = (data: any) => {
    if(!loan) return;
    if(data.loanAmount > loan.loanAmount - loan.amountPaid){
      
      Swal.fire({
        icon:"error",
        title:"Loan Amount cannot be greater than Loan Balance",
        toast:true,
        position:"top-right",
        showConfirmButton:false,
        timer:3000
    })
      return;
    }
    const loanData:RepayLoanType = {
      amountPaid: data.loanAmount,
      receivedBy: storedUser?.id!,
    }
    mutate(loanData)
    console.log(loanData);
    reset();
  };
  const onErrors = (error: any) => {
    console.log(error);
    console.log(errors);
  };
  return (
    <ReusableModal title='Repay Loan'>
        <form
        className="card-body"
        onSubmit={handleSubmit(handleRepayLoan, onErrors)}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Loan Amount</span>
          </label>
          <input
            type="number"
            className="input input-bordered"
            {...register("loanAmount", { required: "Loan Amount is required",min: 0,valueAsNumber:true })}
          />
          {errors.loanAmount && (
            <p className="text-red-500 text-xs italic">
              Enter the Amount of Loan
            </p>
          )}
        </div>
        

        <div className="form-control mt-6">
          <button disabled={isPending} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </ReusableModal>
  )
}
