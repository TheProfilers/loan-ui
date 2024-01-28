import { Link } from 'react-router-dom'
import { SAgentType } from '../../types/SAgentTypes'

export default function SAgentItem({agent}: {agent: SAgentType}) {
  return (
    <Link to={`/sagents/${agent._id}`} className="p-2 mb-1 shadow-sm bg-white rounded-sm hover:bg-blue-50 duration-200 cursor-pointer flex justify-between w-full items-center">
      <div className="flex gap-2">
        <div>
          <p className="capitalize font-semibold">{agent.firstName} {agent.lastName}</p>
          <p className="text-slate-500 text-sm">{agent.phoneNumber}</p>
        </div>
      </div>
    </Link>
  )
}
