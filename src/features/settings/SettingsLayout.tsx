import { UpdateSettingsType } from "../../services/settingsapi";
import BackButton from "../../ui/BackButton";
import Loader from "../../ui/Loader";
import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";

export default function SettingsLayout() {
    const {data,isLoading,error} = useSettings();
    const {mutate,isPending} = useUpdateSettings();
    if(isLoading) return <Loader/>

    if(error) return <p className="text-red-500 text-lg italic">{error.message}</p>

    if(!data) return <p className="text-red-500 text-lg italic">No Settings Found</p>
    //console.log(data);
    const handleUpdateSettings = (e:any) => {
        const {value} = e.target as HTMLInputElement;
        const settingData:UpdateSettingsType = {
            loansLimit: Number(value),
            id: data._id!
        }
        mutate(settingData);

    }
  return (
    <>
    <div className="flex justify-between items-start">
    <BackButton/>
    <h1 className="font-medium text-lg uppercase">Fare Loans Settings</h1>
    </div>
    <div>
    <form className="w-full max-w-xs mx-6 mt-4">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-80">
            <label className="block font-medium text-lg md:text-start mb-1 md:mb-0 pr-4">
              Loan Limit
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              defaultValue={data.loansLimit}
              disabled={isPending}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
             onBlur={(e) => handleUpdateSettings(e)}
            />
          </div>
        </div>
       
      </form>
    </div>
    </>
  )
}
