import Loader from "../../ui/Loader"
import FloatItem from "./FloatItem"
import ReusableFloatItem from "./ReusableFloatItem"
import { useShopAgentFloat } from "./useShopAgentFloat"

export default function FloatDisplay() {
    const {floats,loadingFloats,errorFloats} = useShopAgentFloat()

    if(loadingFloats){
        return <Loader/>
    }
    if(errorFloats){
        return <div>{errorFloats.message}</div>
    }
    if(!floats){
        return <div>No Floats</div>
    }
    console.log(floats);
  return (
    <>
    <h1 className="font-medium text-lg text-gray-500">Assigned Float</h1>
   {
    floats.map((float,index)=>(
        <FloatItem key={index} float={float}/>
    ))
   }
   <h1 className="font-medium text-lg text-gray-500">Current Float</h1>
   {
    floats.map((float,index)=>(
        <ReusableFloatItem key={index} currency={float.currency} amount={float.totalAmount}/>
    ))
   }

<h1 className="font-medium text-lg text-gray-500">Float Balance</h1>
{
    floats.map((float,index)=>(
        <ReusableFloatItem key={index} currency={float.currency} amount={float.amount - float.totalAmount}/>
    ))
   }

    </>
  )
}
