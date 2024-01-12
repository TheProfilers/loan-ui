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
    if(!stock){
        return <div>No Stock</div>
    }
    console.log(stock)
    const today = new Date().toDateString();
    console.log(today)
  return (
    <>
    <h2 className='font-normal text-orange-500 text-lg my-2'>Agent Stock</h2>
    {stock.length < 1 && <div>No Stock</div>}

    <div className="overflow-x-auto" >

    </div>
    </>
  )
}
