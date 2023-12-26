import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNewLoanee } from "./useNewLoanee";

export default function NewLoanModal() {
  const {register, handleSubmit, formState: {errors},reset} = useForm();
  const newLoanModal = useRef<HTMLDialogElement>(null);
  const {mutate,isPending} = useNewLoanee();
  const openModal = () => {
    newLoanModal.current?.showModal();
  };
  const closeModal = () => {
    newLoanModal.current?.close();
  };

  const handleNewLoanee=(data:any)=>{
    console.log(data);
    const {firstName,lastName,phoneNumber,idNumber,email,limit} = data;
    const newLoanee = {
      firstName,
      lastName,
      phoneNumber,
      idNumber,
      email,
      limit
    }
    mutate(newLoanee);
    reset();
    closeModal()
  }
  const onErrors = (error: any) => {
    console.log(error)
    console.log(errors)
  };
  return (
    <>
     
      <button type="button" className="btn" onClick={openModal}>
        New Loanee
      </button>
      <dialog ref={newLoanModal} className="modal">
        <div className="modal-box">
          <div className="flex justify-end">
            <button type="button" onClick={closeModal} className="text-2xl cursor-pointer">
              X
            </button>
          </div>
          <form className="w-full max-w-lg" onSubmit={handleSubmit(handleNewLoanee,onErrors)} >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  First Name:
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  {...register("firstName", { required: "First Name is required" })}
                  
                />
                {errors.firstName && <p className="text-red-500 text-xs italic">Enter first Name</p>}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  {...register("lastName", { required: "Last Name is required" })}
                />
                {errors.lastName && <p className="text-red-500 text-xs italic">Enter Last Name</p>}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Phone Number:
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  {...register("phoneNumber", { required: "Phone number is required" })}
                  
                />
                {errors.phoneNumber && <p className="text-red-500 text-xs italic">Enter Phone Number</p>}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  ID Number:
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  {...register("idNumber", { required: "ID Number is required" })}
                />
                {errors.idNumber && <p className="text-red-500 text-xs italic">Enter id Number</p>}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Email:
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-red-500 text-xs italic">Enter an email</p>}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Limit:
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  {...register("limit", { required: "Limit is required", min: 0,valueAsNumber:true })}
                />
                {errors.limit && <p className="text-red-500 text-xs italic">Enter a loan Limit</p>}
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" disabled={isPending} className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
