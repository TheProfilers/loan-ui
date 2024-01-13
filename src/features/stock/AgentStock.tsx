import { useAuth } from "../../context/AuthContext";
import { StockApproval } from "../../services/apiStock";
import Loader from "../../ui/Loader";
import { formatCurrency, formatDate } from "../../utils/helpers";
import ApproveStockRequest from "./ApproveStockRequest";
import RequestLoanModal from "./RequestLoanModal";
import { useApproveStockRequest } from "./useApproveStockRequest";
import { useTodayAgentStock } from "./useTodayAgentStock";

export default function AgentStock() {
    const {stock, error, isLoading} = useTodayAgentStock();
    const {storedUser} = useAuth();
    const {mutate,isPending} = useApproveStockRequest()
    const handleApprove = (stockId:string)=>{
      const payload:StockApproval = {
        id: stockId,
        status: 'approved'
      }
      mutate(payload)
    }

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
    const stockRequestList = stock.map(s=>{
      return {
        stockId: s._id,
        requestedBy: s.requestedBy
      }
    }).flat();
    console.log(stockRequestList)
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
          {storedUser?.role === 'admin' && <button className="btn btn-outline btn-accent btn-xs">Update</button>}
          </div>
        </td>
      </tr>
        ))
      }
    </tbody>
      </table>
    </div>

    <h2 className='font-normal text-orange-500 text-lg my-2'>Stock Requests</h2>
    {stockRequestList.length < 1 ? <div>No Stock Request</div> : (
      <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Amount Requested</th>
            <th>Time Requested</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            stock.map((s)=>(
              s.requestedBy.map((r,index)=>(
                <tr key={index}>
                  <td>{r.userId.name}</td>
                  <td>{r.userId.phone}</td>
                  <td>{formatCurrency(r.amountRequested)}</td>
                  <td>{formatDate(r.time)}</td>
                  <td>
                    {storedUser?.id === s.belongsTo._id ? <div className="flex space-x-2">
                      <button disabled={s.status === 'approved' || s.status ==='rejected'} onClick={()=>handleApprove(s._id)} className="btn btn-outline btn-accent btn-xs">Approve</button>
                      <button disabled={s.status === 'approved' || s.status ==='rejected'} className="btn btn-outline btn-warning btn-xs">Reject</button>
                    </div> : <div>
                      No Actions
                      </div>}
                  </td>
                </tr>
              ))
            ))
          }
        </tbody>
      </table>
    </div>
    )}
    
    </>
  )
}
