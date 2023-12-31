import { useAuth } from "../../context/AuthContext";
import ColumnText from "../../ui/ColumnText";
import { formatDate } from "../../utils/helpers";

export default function AccountsLayout() {
    const {storedUser} = useAuth()
    console.log(storedUser)
  return (
    <div className="flex flex-col justify-center items-center  h-[calc(100vh-8rem)]">
      <div className="w-24 h-24 rounded-full mb-4 flex justify-center items-center">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="shadow p-4 rounded w-full max-w-sm">
        <div className="grid grid-cols-3 md:grid-cols-4">
          <ColumnText title="Name" text={storedUser?.name!} />
          <ColumnText title="Email" text={storedUser?.email!}/>
          <ColumnText title="Phone" text={storedUser?.phone!} />
          <ColumnText title="Last Login" text={formatDate(storedUser?.lastLogin!)} />
        </div>

        <form className="w-full max-w-sm mt-5">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="password"
              
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Reset Password
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}
