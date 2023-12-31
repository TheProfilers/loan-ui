import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthContext";

export default function LoginLayout() {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const {login,error,isLoading,storedUser} = useAuth()
    const navigate = useNavigate();
    useEffect(()=>{
        if(storedUser) navigate('/')
    },[storedUser])
    const handleLogin = async(data: any) => {
         login(data.email,data.password);
        
      };
      const onErrors = (error: any) => {
        console.log(error);
        console.log(errors);
      };
      if(error){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
          
        });
      }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(handleLogin,onErrors)} >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">Enter the Email</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              {...register("password", { required: "password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">Enter the password</p>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button disabled={isLoading} type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <div className="form-control mt-6">
            <Link to="/register" className="text-blue-600">
              <span className="text-xs text-gray-400">
                Do not have account?
              </span>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
