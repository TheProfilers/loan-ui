import { useRef } from "react";
import { useForm } from "react-hook-form";
import NewLoanReusableModal, {
    NewLoanModalPropsRef,
} from "../../ui/ReusableModal";

export default function NewShopModal() {
  const newShopModal = useRef<NewLoanModalPropsRef>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const closeLoanModal = () => {
    newShopModal.current?.closeModal();
  };
  const handleNewShop = (data: any) => {
    console.log(data);
    reset();
    closeLoanModal();
  };
  const onErrors = (error: any) => {
    console.log(error);
    console.log(errors);
  };

  return (
    <NewLoanReusableModal title="Add Shop" ref={newShopModal}>
      <div className="w-full ">
        <form
          onSubmit={handleSubmit(handleNewShop, onErrors)}
          className="bg-white  rounded mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className=" appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">Enter the Name</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Town
            </label>
            <input
              className=" appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              {...register("town", { required: "Town is required" })}
            />
            {errors.town && (
              <p className="text-red-500 text-xs italic">Enter the Town</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Country
            </label>
            <select
              className="block appearance-none w-full  border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="grid-state"
              {...register("country", { required: "Country is required" })}
            >
              <option value="KE">Kenya</option>
              <option value="UG">Uganda</option>
             
            </select>
            
            {errors.country && (
              <p className="text-red-500 text-xs italic">Enter the Country</p>
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
      </div>
    </NewLoanReusableModal>
  );
}
