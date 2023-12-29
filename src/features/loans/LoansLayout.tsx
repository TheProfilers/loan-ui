import { useState } from "react";
import { BsFillEyeFill, BsTrash3 } from "react-icons/bs";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LoaneTypes } from "../../types/LoanTypes";
import FilterComponent from "../../ui/FilterComponent";
import Loader from "../../ui/Loader";
import { useAllLoans } from "./useAllLoans";
import { useDeleteLoan } from "./useDeleteLoan";

export default function LoansLayout() {
  const { storedUser } = useAuth();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useAllLoans();
  const { mutate, isPending } = useDeleteLoan();
  if (isLoading) return <Loader />;
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Something went wrong</div>;
  console.log(data);
  const handleDelete = async (id: string) => {
    mutate(id);
  };
  const options = [
    {
      label: "all",
      value: "all",
    },
    {
      label: "Fully Paid",
      value: "paid",
    },
    {
      label: "Not Paid",
      value: "unpaid",
    },
  ];
  const status = searchParams.get("status") || "all";
  let filteredBookings;
  if (status === "paid") {
    filteredBookings = data.filter(
      (loan: LoaneTypes) => loan.loanAmount === loan.amountPaid
    );
  } else if (status === "unpaid") {
    filteredBookings = data.filter(
      (loan: LoaneTypes) => loan.loanAmount !== loan.amountPaid
    );
  } else {
    filteredBookings = data;
  }
  const recordsPerPage = 6;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredBookings.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredBookings.length / recordsPerPage);
  const numbers = [...Array(totalPages + 1).keys()].slice(1);
  return (
    <>
      <div className="flex justify-end">
        <FilterComponent param="status" options={options} />
      </div>
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
            {currentRecords?.map((loan, index) => (
              <tr className="bg-base-200" key={index}>
                <th>{index + 1}</th>
                <td>{loan.loanee.firstName}</td>
                <td>{loan.loanAmount}</td>
                <td>
                  <div className="flex space-x-1">
                    <Link
                      to={`/loans/${loan._id}`}
                      className="btn btn-sm btn-square btn-success"
                    >
                      <BsFillEyeFill />
                    </Link>
                    {storedUser?.role === "admin" && (
                      <button
                        onClick={() => handleDelete(loan._id)}
                        disabled={isPending}
                        className="btn btn-sm btn-square btn-warning"
                      >
                        <BsTrash3 />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end">
        <div className="join mt-1">
         {
            numbers.map((number,index)=>(
              <button key={index} onClick={()=>setCurrentPage(number)} className={`join-item btn ${currentPage === number ? "btn-active" : ""}`}>{number}</button>
            ))
         }
         
        </div>
        </div>
      </div>
      
    </>
  );
}
