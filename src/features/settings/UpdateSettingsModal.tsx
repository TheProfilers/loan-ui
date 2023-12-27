import { useForm } from "react-hook-form";
import ReusableModal from "../../ui/ReusableModal";

export default function UpdateSettingsModal() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();

        const handleLoanUpdate = (data: any) => {
            console.log(data);
            reset();
        };
        const onErrors = (error: any) => {
            console.log(error);
            console.log(errors);
        };
  return (
    <ReusableModal title="Update Loan Limit">
        <form
        className=""
        onSubmit={handleSubmit(handleLoanUpdate, onErrors)}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Loan Amount</span>
          </label>
          <input
            type="number"
            className="input input-bordered"
            {...register("loanLimit", { required: "Loan Limit is required",min: 0,valueAsNumber:true })}
          />
          {errors.loanLimit && (
            <p className="text-red-500 text-xs italic">
              Enter the Limit of Loan
            </p>
          )}
        </div>
       

        <div className="form-control mt-6">
          <button  type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </ReusableModal>
  )
}
