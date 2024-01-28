import Loader from "../../ui/Loader"
import SAgentItem from "./SAgentItem"
import { useShopSAgent } from "./useShopSAgents"

export default function SAgents() {
    const {sgents,isLoadingSAgents,sError} = useShopSAgent()

    if (isLoadingSAgents) {
        return <Loader />
    }
    if (sError) {
        return <div>{sError.message}</div>
    }
    if (!sgents) {
        return <div>No SAgents</div>
    }
    console.log(sgents)
  return (
    <>
    {
        sgents.map((sagent,index)=>(
            <SAgentItem key={index} agent={sagent}/>
        ))
        
    }

  
    </>
  )
}
