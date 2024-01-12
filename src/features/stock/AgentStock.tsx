import { useAuth } from "../../context/AuthContext";
import Loader from "../../ui/Loader";
import { formatCurrency, formatDate } from "../../utils/helpers";
import ApproveStockRequest from "./ApproveStockRequest";
import RequestLoanModal from "./RequestLoanModal";
import { useTodayAgentStock } from "./useTodayAgentStock";

export default function AgentStock() {
    const {stock, error, isLoading} = useTodayAgentStock();
    const {storedUser} = useAuth();

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
    console.log(storedUser)
  return (
    <>
    <h2 className='font-normal text-orange-500 text-lg my-2'>Agent Stock</h2>
    {stock.length < 1 && <div>No Stock</div>}

    <div className="overflow-x-auto" >
      <table className="table table-xs">
    <thead>
      <tr>
        <th>Time Assigned</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        stock.map((s,index)=>(
          <tr key={index}>
        <td>{formatDate(s.createdAt)}</td>
        <td>{formatCurrency(s.amount)}</td>
        <td>{s.status}</td>
        <td>
          <div className="flex space-x-2">
          {/* <button className="btn btn-outline btn-accent btn-xs">Request</button> */}
         {storedUser?.id === s.belongsTo._id ? <ApproveStockRequest/> : <RequestLoanModal stockId={s._id} />}
          <button className="btn btn-outline btn-accent btn-xs">Update</button>
          </div>
        </td>
      </tr>
        ))
      }
    </tbody>
      </table>
    </div>
    </>
  )
}
