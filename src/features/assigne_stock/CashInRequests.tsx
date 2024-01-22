import Loader from '../../ui/Loader';
import { formatCurrency, formatDate } from '../../utils/helpers';
import { useRequesterRequests } from './useRequesterRequests';

export default function CashInRequests() {
    const{data, isLoading, error} = useRequesterRequests();

    if(isLoading) return <Loader/>
    if(error) return <div>{error.message}</div>
    if(!data) return <div>Something went wrong</div>
    console.log(data)
  return (
   <>
   <h3 className='font-medium text-lg text-orange-500 py-2'>Cash In</h3>
   {
    data.length < 1 ? <div>No Cash Out Requests</div> :<div className="overflow-x-auto">
    <table className="table table-xs">
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Phone</th>
          <th>Amount Requested</th>
          <th>Status</th>
          <th>Time Requested</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r, index) => (
          <tr key={index}>
             <td>{r.reciever.name}</td>
            <td>{r.requester.name}</td>
           
            <td>{r.requester.phone}</td>
            <td>{formatCurrency(r.amountRequested)}</td>
            {r.status ==="pending" && <td><p className="text-orange-400 capitalize">{r.status}</p></td>}
            {r.status ==="Approved" && <td><p className="text-green-500">{r.status}</p></td>}
            {r.status ==="Declined" && <td><p className="text-red-500">{r.status}</p></td>}
            <td>{formatDate(r.createdAt)}</td>
            <td>
             
             No Action
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
   }

   </>
  )
}
