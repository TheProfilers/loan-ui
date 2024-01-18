import { useAuth } from "../../context/AuthContext";
import { StockApproval } from "../../services/apiStock";
import Loader from "../../ui/Loader";
import { formatCurrency, formatDate } from "../../utils/helpers";
import RequestLoanModal from "./RequestLoanModal";
import { useApproveStockRequest } from "./useApproveStockRequest";
import { useDeclineStockRequest } from "./useDeclineStockRequest";
import { useTodayAgentStock } from "./useTodayAgentStock";
import { useTodayStockExchange } from "./useTodayStockRequests";

export default function AgentStock() {
  //const  {requests, todayError, isGettingToday} = useTodayStockExchange();
  const { stock, error, isLoading } = useTodayAgentStock();
  const { requests, todayError, isGettingToday } = useTodayStockExchange();

  const { storedUser } = useAuth();
  const { mutate, isPending } = useApproveStockRequest();
  const { decline, isDeclining } = useDeclineStockRequest();

  if (isLoading || isGettingToday) {
    return <Loader />;
  }
  if (error || todayError) {
    return <div>{error?.message}</div>;
  }
  if (!stock || !requests) {
    return <div>No Stock</div>;
  }

  console.log(requests);
  // if(!requests){
  //   return <div>No Stock Requests</div>
  // }

  const handleApprove = (stockId: string) => {
    mutate(stockId);
  };

  const handleDecline = (stockId: string) => {
    const payload: StockApproval = {
      id: stockId,
      status: "rejected",
    };

    decline(payload);
  };

  console.log(stock);
  //console.log(requests)
  const stockRequestList = stock
    .map((s) => {
      return {
        stockId: s._id,
        requestedBy: s.requestedBy,
      };
    })
    .flat();
    if(stock.length < 1){
      return <div>No Stock Assigned today</div>
    }
  const storeRequests = requests.filter((r) => r.stockId === stock[0]._id);
  console.log(storeRequests);
  return (
    <>
      <h2 className="font-normal text-orange-500 text-lg my-2">Agent Stock</h2>

      {stock.length < 1 ? (
        <div>No Stock Assigned today</div>
      ) : (
        <div className="overflow-x-auto">
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
              {stock.map((s, index) => (
                <tr key={index}>
                  <td>{formatDate(s.createdAt)}</td>
                  <td>{formatCurrency(s.amount)}</td>
                  <td>{s.status}</td>
                  <td>
                    <div className="flex space-x-2">
                      {s._id}
                      {/* <button className="btn btn-outline btn-accent btn-xs">Request</button> */}
                      {storedUser?.id === s.belongsTo._id ||
                      storedUser?.role === "admin" ? (
                        ""
                      ) : (
                        <RequestLoanModal stockId={s._id} />
                      )}
                      {storedUser?.role === "admin" && (
                        <button className="btn btn-outline btn-accent btn-xs">
                          Update
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h2 className="font-normal text-orange-500 text-lg my-2">
        Stock Requests
      </h2>

      {stockRequestList.length < 1 ? (
        <div>No Stock Request</div>
      ) : (
        <div className="overflow-x-auto">
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
              {storeRequests.map((r, index) => (
                <tr key={index}>
                  <td>{r.requester.name}</td>
                  <td>{r.reciever.name}</td>
                  <td>{r.requester.phone}</td>
                  <td>{formatCurrency(r.amountRequested)}</td>
                  <td>{r.status}</td>
                  <td>{formatDate(r.createdAt)}</td>
                  <td>
                    {storedUser?.id === r.reciever._id ? (
                      <div className="flex space-x-2">
                        <button
                          disabled={
                            r.status === "Approved" ||
                            r.status === "rejected" ||
                            isPending
                          }
                          onClick={() => handleApprove(r._id)}
                          className="btn btn-outline btn-accent btn-xs"
                        >
                          Approve
                        </button>
                        <button
                          disabled={
                            r.status === "Approved" ||
                            r.status === "rejected" ||
                            isDeclining
                          }
                          onClick={() => handleDecline(r._id)}
                          className="btn btn-outline btn-warning btn-xs"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <div>No Actions</div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
