import { BsFillEyeFill, BsTrash3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loader from "../../ui/Loader";
import { useAllLoanees } from "./useAllLoanees";
export default function LoaneesDisplay() {
  const { data, isLoading, error } = useAllLoanees();
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
        <h1 className="text-2xl">No Agents Found</h1>
      </div>
    );
  }
  console.log(data);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            data?.map((loanee, index) => (
              <tr className="bg-base-200" key={index} >
            <th>{index + 1}</th>
            <td>{loanee.firstName}</td>
            <td>{loanee.phoneNumber}</td>
            <td>
              <div className="flex space-x-1">
                <Link to={`/loanees/${loanee._id}`} className="btn btn-sm btn-square btn-success">
                  <BsFillEyeFill />
                </Link>
                <button className="btn btn-sm btn-square btn-warning">
                  <BsTrash3 />
                </button>
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
