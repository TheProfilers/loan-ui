import { useForm } from 'react-hook-form';
import { UserTypes } from '../../types/UserTypes';
import ReusableModal from '../../ui/ReusableModal';
import { useNewShopAgent } from './useNewShopAgent';

export default function NewShopAgentModal() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const {mutate,isPending} = useNewShopAgent();
      const handleNewAgent = (data: any) => {
        const userdata:UserTypes = {
          name:data.fullName,
          email:data.email,
          phone:data.phone,
          role:'agent',
          password:'12345678'

        };
        mutate(userdata);
        console.log(userdata);
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered"
             
              {...register("phone", { required: "Phone is required" })}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic">Enter the Phone</p>
            )}
          </div>
          
          <div className="form-control mt-6">
            <button disabled={isPending} type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
         
        </form>
      </div>
    </ReusableModal>
  )
}
