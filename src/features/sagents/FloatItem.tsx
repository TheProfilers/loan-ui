import { FloatType } from "../../types/FloatType";
import { formatDynamicCurrency } from "../../utils/helpers";

export default function FloatItem({float}: {float:FloatType}) {
  return (
   <>
   {/* <h1 className="text-lg font-medium text-gray-400">Assigned FLoat</h1> */}
    <div className='flex justify-between items-start mt-2 shadow-sm p-4 bg-teal-50'>
        <div className='flex space-x-2 items-center'>
            <div>
                {float.currency === 'KES' && <img src="/images/kenya.jpg" alt="" className="h-3 w-6 object-cover" />}
                {float.currency === 'UGX' && <img src="/images/uganda.png" alt="" className="h-3 w-6 object-cover" />}
                {float.currency === 'USD' && <img src="/images/usa.jpg" alt="" className="h-3 w-6 object-cover" />}
            </div>
            <div className='text-sm font-medium text-gray-700'>{float.currency}</div>
            
        </div>
        <div className='text-sm font-medium text-gray-700'>{formatDynamicCurrency(float.amount)}</div>
    </div>
   </>
  )
}
