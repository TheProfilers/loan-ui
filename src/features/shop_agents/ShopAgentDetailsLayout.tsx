import BackButton from '../../ui/BackButton'
import ColumnText from '../../ui/ColumnText'
import Loader from '../../ui/Loader'
import { useShopAgentDetails } from './useShopAgentDetails'

export default function ShopAgentDetailsLayout() {
    const {data, isLoading, error} = useShopAgentDetails()

    if(isLoading) return <Loader/>
    if(error) return <div>{error.message}</div>
    if(!data) return <div>Something went wrong</div>
    console.log(data)
  return (
    <>
    <div className='flex justify-between'>
    <BackButton/>

    <h3 className='font-medium text-xl uppercase'>Agent Details</h3>
    </div>
    
        <h3 className='font-medium text-lg my-3'>Agent Information</h3>
        <div className='shadow rounded-sm p-2'>
        <ColumnText title='Email' text={data.email} />
    <div className='mt-2 grid grid-cols-2 md:grid-cols-4 gap-8'>
        
        <ColumnText title='Phone' text={data.phone!} />
        <ColumnText title='Full Name' text={data.name} />
        <ColumnText title='Last Login' text='25/3/2023' />
    </div>
        </div>
    </>
  )
}
