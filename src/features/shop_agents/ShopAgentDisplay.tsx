import { BsFillEyeFill, BsTrash3 } from 'react-icons/bs';
import { ClockLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import { useShopAgents } from './useShopAgents';

export default function ShopAgentDisplay() {
    const {data,isLoading,error} = useShopAgents();

    if(isLoading) {
        return (
            <div className='h-screen flex flex-col justify-center items-center'>
                <ClockLoader color="#36d7b7" />
            </div>
        )
    }
    if(error) {
        Swal.fire({
            title:'Error',
            text:error.message,
            icon:'error'
        })
        
    }
    if(data?.length === 0) {
        return (
            <div className='h-screen flex flex-col justify-center items-center'>
                <h1 className='text-2xl'>No Agents Found</h1>
            </div>
        )
    }
    
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
            data?.map((agent,index) => (
                <tr className="bg-base-200" key={index} >
                <th>{index + 1}</th>
                <td>{agent.name}</td>
                <td>{agent.phone}</td>
                <td>
                  <div className="flex space-x-1">
                    <button className="btn btn-sm btn-square btn-success">
                      <BsFillEyeFill />
                    </button>
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
  )
}
