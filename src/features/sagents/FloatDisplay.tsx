import Loader from "../../ui/Loader"
import FloatItem from "./FloatItem"
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
   {
    floats.map((float,index)=>(
        <FloatItem key={index} float={float}/>
    ))
   }
    </>
  )
}
