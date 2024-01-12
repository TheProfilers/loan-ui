import { BsFillEyeFill, BsTrash3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Loader from "../../ui/Loader";
import { useAllLoanees } from "./useAllLoanees";
import { useDeleteLoanee } from "./useDeleteLoanee";
export default function LoaneesDisplay() {
  const {storedUser} = useAuth();
  const { data, isLoading, error } = useAllLoanees();
  const {mutate,isPending} = useDeleteLoanee();

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return (
      <div className="h-[calc(100vh-9rem)] flex flex-col justify-center items-center">
        <div className="shadow p-2">
        <h1 className="text-2xl text-red-600">{error.message}</h1>
        </div>
      </div>
    );
  }
  if (data?.length === 0) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl">No Borrowers Found</h1>
      </div>
    );
  }
  const handleDelete = async(id: string) => {
     mutate(id);
  }
  //console.log(data);
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Id No.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            data?.map((loanee, index) => (
              <tr className="" key={index} >
            <th>{index + 1}</th>
            <td>{loanee.firstName}</td>
            <td>{loanee.phoneNumber}</td>
            <td>{loanee.idNumber}</td>
            <td>
              <div className="flex space-x-1">
                <Link to={`/loanees/${loanee._id}`} className="btn btn-sm btn-square btn-success">
                  <BsFillEyeFill />
                </Link>
               {storedUser?.role === 'admin' && <button type="button" disabled={isPending} onClick={()=>handleDelete(loanee._id!)} className="btn btn-sm btn-square btn-warning">
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
  );
}
