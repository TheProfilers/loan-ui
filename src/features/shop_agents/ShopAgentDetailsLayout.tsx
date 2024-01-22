import { useAuth } from '../../context/AuthContext'
import BackButton from '../../ui/BackButton'
import Loader from '../../ui/Loader'
import { formatDate } from '../../utils/helpers'
import AgentLoan from '../loans/AgentLoan'
import AgentStock from '../stock/AgentStock'
import AssignStockModal from '../stock/AssignStockModal'
import { useShopAgentDetails } from './useShopAgentDetails'

export default function ShopAgentDetailsLayout() {
    const {data, isLoading, error} = useShopAgentDetails()
    const {storedUser} = useAuth();

    if(isLoading) return <Loader/>
    if(error) return <div>{error.message}</div>
    if(!data) return <div>Something went wrong</div>
    console.log(data)
  return (
    <>
    <div className='flex justify-between'>
    <BackButton/>

    {/* <h3 className='font-medium text-xl uppercase'>Agent Details</h3> */}
    { storedUser?.role ==='admin' && <AssignStockModal/>}
    </div>
    
        <h3 className='font-medium text-lg my-3 text-orange-500'>Agent Information</h3>
        <div className='overflow-x-auto'>
          <table className='table table-xs'>
            <thead>
            <tr>
            <th>Phone</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Last Login</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.email}</td>
              {data.lastLogin ? <td>{formatDate(data.lastLogin)}</td> : <td>Never</td>}
            </tr>
            </tbody>
          </table>
        </div>
        

        {storedUser?.role ==='admin' && <h3 className='font-medium text-lg my-3 text-orange-500'>Agent Loans</h3>}
       {storedUser?.role ==='admin' && <AgentLoan/>}

       {storedUser?.role ==='admin' ? '' : <AgentStock/>}
    </>
  )
}
