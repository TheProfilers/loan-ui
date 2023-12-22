import { BsFillPeopleFill, BsFillPersonCheckFill } from "react-icons/bs";

import HomeCard from "./HomeCard";
import HomeGraph from "./HomeGraph";

export default function HomeLayout() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <HomeCard title="Agents" value="4" >
        <span className="text-3xl"><BsFillPeopleFill /></span>
        </HomeCard>
        <HomeCard title="Loanees" value="20" >
        <span className="text-3xl"><BsFillPersonCheckFill /></span>
        </HomeCard>
        <HomeCard title="Loans" value="20,000" >
        <span className="text-3xl">$</span>
        </HomeCard>
        
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
            <HomeGraph/>
        </div>
    </>
  )
}
