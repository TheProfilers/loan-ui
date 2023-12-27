import { BsFillEyeFill, BsTrash3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Loader from "../../ui/Loader";
import { useAllLoans } from "./useAllLoans";
import { useDeleteLoan } from "./useDeleteLoan";

export default function LoansLayout() {
  const {storedUser} = useAuth();
    const { data, isLoading, error } = useAllLoans();
    const {mutate,isPending} = useDeleteLoan();
    if (isLoading) return <Loader/>;
    if (error) return <div>{error.message}</div>;
    if (!data) return <div>Something went wrong</div>;
    //console.log(data);
    const handleDelete = async(id: string) => {
      mutate(id);
    }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Loanee</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
         {
            data?.map((loan,index) => (
                <tr className="bg-base-200" key={index} >
                <th>{index + 1}</th>
                <td>{loan.loanee.firstName}</td>
                <td>{loan.loanAmount}</td>
                <td>
                  <div className="flex space-x-1">
                    <Link to={`/loans/${loan._id}`} className="btn btn-sm btn-square btn-success">
                      <BsFillEyeFill />
                    </Link>
                   {storedUser?.role === 'admin' && <button onClick={()=>handleDelete(loan._id)} disabled={isPending}  className="btn btn-sm btn-square btn-warning">
                      <BsTrash3 />
                    </button>}
                  </div>
                </td>
              </tr>
            ))
         }
        </tbody>
      </table>
    </div>
  )
}
