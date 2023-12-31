import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { PasswordType } from "../../services/apiAuth";
import BackButton from "../../ui/BackButton";
import ColumnText from "../../ui/ColumnText";
import { formatDate } from "../../utils/helpers";
import AccountsLoans from "./AccountsLoans";
import { useChangePassword } from "./useChangePassword";

export default function AccountsLayout() {
    const {storedUser} = useAuth()
    const {register, handleSubmit,reset, formState: {errors}} = useForm()
    const {mutate,isPending} = useChangePassword()

    const handleChangePassword = (data: any) => {
      const passwordData:PasswordType = {
        newPassword:data.newPassword,
        id:storedUser?.id!
      }
        mutate(passwordData)
        console.log(passwordData)

        reset()
    }
    const onErrors = (error: any) => {
        console.log(errors)
        console.log(error)

    }
    console.log(storedUser)
  return (
   <>
   <BackButton/>
    <div className="flex justify-center w-full  ">
     
      
      <div className="shadow p-4 rounded w-full max-w-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <ColumnText title="Name" text={storedUser?.name!} />
          <ColumnText title="Email" text={storedUser?.email!}/>
          <ColumnText title="Phone" text={storedUser?.phone!} />
          <ColumnText title="Last Login" text={formatDate(storedUser?.lastLogin!)} />
        </div>

        <form className="w-full max-w-sm mt-5" onSubmit={handleSubmit(handleChangePassword,onErrors)} >
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="password"
              {...register("newPassword", { required: "First Name is required" })}
            />
            <button
            disabled={isPending}
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Reset Password
            </button>
            
          </div>
          {errors.newPassword && <p className="text-red-500 text-xs italic">Enter Password</p>}
        </form>
      </div>
      
    </div>
    <h3 className='font-medium text-lg my-3 text-orange-500'>Your Loans</h3>
    <AccountsLoans/>
   </>
  );
}
