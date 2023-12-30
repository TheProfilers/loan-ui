import { useForm } from "react-hook-form";
import ReusableModal from "../../ui/ReusableModal";
import { useUpdateLimit } from "./useUpdateLimit";

export default function UpdateLoaneeLimit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const {mutate,isPending} = useUpdateLimit();
  const handleUpdateLimit = (data: any) => {
    console.log(data);
    mutate(data.limit);
    reset();
  };
  const onErrors = (error: any) => {
    console.log(error);
    console.log(errors);
  };
  return (
    <ReusableModal title="Update Limit">
      <form
        className="card-body"
        onSubmit={handleSubmit(handleUpdateLimit, onErrors)}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Loan Limit</span>
          </label>
          <input
            type="number"
            className="input input-bordered"
            {...register("limit", {
              required: "Loan Amount is required",
              min: 0,
              valueAsNumber: true,
            })}
          />
          {errors.limit && (
            <p className="text-red-500 text-xs italic">
              Enter the Limit of Loan
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
  );
}
