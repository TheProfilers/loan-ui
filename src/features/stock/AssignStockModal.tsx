import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { IStock } from "../../services/apiStock";
import NewLoanReusableModal, { NewLoanModalPropsRef } from "../../ui/ReusableModal";
import { useAssignStock } from "./useAssignStock";

export default function AssignStockModal() {
    const assignLoanModal = useRef<NewLoanModalPropsRef>(null);
    const {id} = useParams<{id:string}>()
    const {mutate,isPending} = useAssignStock()
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
    const handleUpdateLimit = (data: any) => {
      const newStock:IStock = {
        amount: data.stock,
        belongsTo: id!,
        status: "default",
      };
      mutate(newStock);
      console.log(newStock);
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
          <button disabled={isPending} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </NewLoanReusableModal>
  )
}
