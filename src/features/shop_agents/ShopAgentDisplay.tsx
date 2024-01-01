import { BsFillEyeFill, BsTrash3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loader from '../../ui/Loader';
import { useDeleteShopAgent } from './useDeleteShopAgent';
import { useShopAgents } from './useShopAgents';

export default function ShopAgentDisplay() {
    const {data,isLoading,error} = useShopAgents();
    const {mutate,isPending}= useDeleteShopAgent();

    const handleDelete = (id:string) => {
        mutate(id);
        
    }

    if(isLoading) {
        return <Loader/>
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        
         {
            data?.map((agent,index) => (
                <tr className="" key={index} >
                <th>{index + 1}</th>
                <td>{agent.name}</td>
                <td>{agent.phone}</td>
                <td>
                  <div className="flex space-x-1">
                    <Link to={`/agents/${agent._id}`} className="btn btn-sm btn-square bg-green-500 hover:bg-green-400 text-white">
                      <BsFillEyeFill />
                    </Link>
                    <button disabled={isPending} onClick={()=>handleDelete(agent._id!)} className="btn btn-sm btn-square btn-warning text-white">
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
