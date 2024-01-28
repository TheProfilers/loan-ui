import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import NewLoanReusableModal, { NewLoanModalPropsRef } from '../../ui/ReusableModal';
import { useNewSAgent } from './useNewSAgent';

export default function NewSAgents() {
    const newSAgentModal = useRef<NewLoanModalPropsRef>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const {id}=useParams<{id:string}>();
      const {mutate,isPending} = useNewSAgent();
        const closeLoanModal = () => {
            newSAgentModal.current?.closeModal();
        };
      const handleNewSAgent = (data: any) => {
        const agentData={
            ...data,
            shopId:id,
            password:'123456'
        }
        console.log(agentData);
        mutate(agentData);
        reset();
        closeLoanModal();
      }
      const onErrors = (error: any) => {
        console.log(error);
        console.log(errors);
      };
  return (
    <NewLoanReusableModal title='Add Agent' ref={newSAgentModal} >
         <form
          onSubmit={handleSubmit(handleNewSAgent, onErrors)}
          className="bg-white  rounded mb-4"
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-3'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              className=" appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              {...register("firstName", { required: "First Name is required" })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs italic">Enter the First Name</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className=" appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              {...register("lastName", { required: "Last Name is required" })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs italic">Enter the Last Name</p>
            )}
          </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ID Number
            </label>
            <input
              className=" appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              {...register("idNumber", { required: "ID Number is required" })}
            />
            {errors.idNumber && (
              <p className="text-red-500 text-xs italic">Enter the ID Number</p>
            )}
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-3'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              className=" appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              {...register("phoneNumber", { required: "Phone Number is required" })}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs italic">Enter the Phone Number</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className=" appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">Enter the Email</p>
            )}
          </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isPending}
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
