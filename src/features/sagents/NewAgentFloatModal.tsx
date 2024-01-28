import { useRef } from "react";
import { useForm } from "react-hook-form";
import NewLoanReusableModal, { NewLoanModalPropsRef } from "../../ui/ReusableModal";

export default function NewAgentFloatModal() {
    const newAgentFloatModal = useRef<NewLoanModalPropsRef>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    const closeLoanModal = () => {
        newAgentFloatModal.current?.closeModal();
      };
        const handleNewFloat = (data: any) => {
            console.log(data);
            reset();
            closeLoanModal();
        };
        const onErrors = (error: any) => {
            console.log(error);
            console.log(errors);
          };
  return (
    <NewLoanReusableModal title="New Float" ref={newAgentFloatModal} >
        <form
          onSubmit={handleSubmit(handleNewFloat, onErrors)}
          className="bg-white  rounded mb-4"
        >
          
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Currency
            </label>
            <select
              className="block appearance-none w-full  border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="grid-state"
              {...register("currency", { required: "Currency is required" })}
            >
              <option value="KES">KES</option>
              <option value="UGX">UGX</option>
              <option value="USD">USD</option>
             
            </select>
            
            {errors.currency && (
              <p className="text-red-500 text-xs italic">Select the Currency</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Amount
            </label>
            <input
              className=" appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              {...register("amount", { required: "AMount is required",valueAsNumber:true })}
            />
            {errors.amount && (
              <p className="text-red-500 text-xs italic">Enter the Amount</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              
            >
              ADD
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={closeLoanModal}
            >
              Cancel
            </button>
          </div>
        </form>
    </NewLoanReusableModal>
  )
}
