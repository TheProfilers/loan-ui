import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LoanType } from "../../types/LoanType";
import NewLoanReusableModal, { NewLoanModalPropsRef } from "../../ui/ReusableModal";
import { useNewLoan } from "./useNewLoan";

export default function NewLoanModal() {
  const {id} = useParams<{id:string}>();
  const {storedUser} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const {mutate,isPending} = useNewLoan();
  const newLoanModal = useRef<NewLoanModalPropsRef>(null);
  const handleNewLoan = (data: any) => {
    const loanData:LoanType = {
      loanAmount: data.loanAmount,
      amountPaid: 0,
      loanReason: data.loanReason,
      loanee: id!,
      servedBy: storedUser?.id!,

    }
    mutate(loanData);
    //console.log(loanData);
    newLoanModal.current?.closeModal();
    reset();
    
  };
  const onErrors = (error: any) => {
    console.log(error);
    console.log(errors);
  };
  return (
    <NewLoanReusableModal title="Give Out Loan" ref={newLoanModal} >
      <form
        className="card-body"
        onSubmit={handleSubmit(handleNewLoan, onErrors)}
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Loan Reason</span>
          </label>
          <textarea
            className="input input-bordered"
            {...register("loanReason", { required: "Loan Reason is required" })}
          ></textarea>
          {errors.loanReason && (
            <p className="text-red-500 text-xs italic">Enter the Loan Reason</p>
          )}
        </div>

        <div className="form-control mt-6">
          <button disabled={isPending} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </NewLoanReusableModal>
  );
}
