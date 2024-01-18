import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { IStockRequest } from '../../services/apiStock';
import NewLoanReusableModal, { NewLoanModalPropsRef } from '../../ui/ReusableModal';
import { useRequestMoreStock } from './useRequestMoreStock';

export default function RequestLoanModal({stockId}: {stockId:string}) {
    const requestLoanModal = useRef<NewLoanModalPropsRef>(null);
    const [requestAmount,setRequestAmount] = useState<number>(0);
    const {id}= useParams<{id:string}>()
      const {storedUser}=useAuth()
      const {mutate,isPending} = useRequestMoreStock()
   
    const handleUpdateLimit = (stockId:string) => {
      
      const requestInfo: IStockRequest={
        stockId: stockId,
        amountRequested: requestAmount!,
        requester: storedUser!.id!,
        reciever: id!,
        status: 'pending'
      }
      mutate(requestInfo);
      console.log(requestInfo);
      setRequestAmount(0);
      requestLoanModal.current?.closeModal();
    };
    
  return (
    <NewLoanReusableModal title='Request Loan' ref={requestLoanModal} >
      <form
        className="card-body"
        
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Amount of Stock Request</span>
          </label>
          <input
            type="number"
            className="input input-bordered"
            value={requestAmount}
            onChange={(e)=>setRequestAmount(Number(e.target.value))}
          />
         
        </div>

        <div className="form-control mt-6">
          <button onClick={()=>handleUpdateLimit(stockId)} disabled={isPending} type="button" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </NewLoanReusableModal>
  )
}
