import { useForm } from 'react-hook-form';
import ReusableModal from '../../ui/ReusableModal';

export default function NewShopAgentModal() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const handleNewAgent = (data: any) => {
        console.log(data);
      };
      const onErrors = (error: any) => {
        console.log(error);
        console.log(errors);
      };
  return (
    <ReusableModal title='New Agent'>
<div className=" shrink-0 w-full  bg-base-100">
        <form
          className="card-body"
          onSubmit={handleSubmit(handleNewAgent, onErrors)}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
             
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs italic">Enter the Full Name</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
             
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">Enter the Email</p>
            )}
          </div>
          
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
         
        </form>
      </div>
    </ReusableModal>
  )
}
