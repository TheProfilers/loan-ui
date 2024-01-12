import Loader from "../../ui/Loader";
import { useTodayAgentStock } from "./useTodayAgentStock";

export default function AgentStock() {
    const {stock, error, isLoading} = useTodayAgentStock();

    if(isLoading){
        return <Loader/>
    }
    if(error){
        return <div>{error.message}</div>
    }
    console.log(stock)
    const today = new Date().toDateString();
    console.log(today)
  return (
    <>
    <h2 className='font-normal text-orange-500 text-lg my-2'>Agent Stock</h2>
    </>
  )
}
