import { useRef } from "react";
import { useForm } from "react-hook-form";
import NewLoanReusableModal, { NewLoanModalPropsRef } from "../../ui/ReusableModal";

export default function AssignStockModal() {
    const assignLoanModal = useRef<NewLoanModalPropsRef>(null);
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
    const handleUpdateLimit = (data: any) => {
      console.log(data);
      reset();
      assignLoanModal.current?.closeModal();
    };
    const onErrors = (error: any) => {
      console.log(error);
      console.log(errors);
    };
  return (
    <NewLoanReusableModal title='Assign Stock' ref={assignLoanModal} > 
    <form
        className="card-body"
        onSubmit={handleSubmit(handleUpdateLimit, onErrors)}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Amount of Stock</span>
          </label>
          <input
            type="number"
            className="input input-bordered"
            {...register("stock", {
              required: "stock is required",
              min: 0,
              valueAsNumber: true,
            })}
          />
          {errors.stock && (
            <p className="text-red-500 text-xs italic py-1">
              Enter the Stock
            </p>
          )}
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </NewLoanReusableModal>
  )
}
