import { formatDynamicCurrency } from "../../utils/helpers";

export default function ReusableFloatItem({currency, amount}: {currency:string, amount:number}) {
  return (
    <>
  
    <div className='flex justify-between items-start mt-2 shadow-sm p-4 bg-teal-50'>
        <div className='flex space-x-2 items-center'>
            <div>
                {currency === 'KES' && <img src="/images/kenya.jpg" alt="" className="h-3 w-6 object-cover" />}
                {currency === 'UGX' && <img src="/images/uganda.png" alt="" className="h-3 w-6 object-cover" />}
                {currency === 'USD' && <img src="/images/usa.jpg" alt="" className="h-3 w-6 object-cover" />}
            </div>
            <div className='text-sm font-medium text-gray-700'>{currency}</div>
            
        </div>
        <div className='text-sm font-medium text-gray-700'>{formatDynamicCurrency(amount)}</div>
    </div>
   </>
  )
}
