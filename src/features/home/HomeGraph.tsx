import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { LoaneTypes } from "../../types/LoanTypes"



export default function HomeGraph({loans,numDays}:{loans:LoaneTypes[],numDays:number}) {
  const alldates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  })
  const data = alldates.map((date) => {
    return{
      label:format(date,'MMM dd'),
      totalLoans:loans.filter((loan)=>isSameDay(date,new Date(loan.createdAt!))).reduce((acc,loan)=>acc+loan.loanAmount,0),
      totalPaid:loans.filter((loan)=>isSameDay(date,new Date(loan.createdAt!))).reduce((acc,loan)=>acc+loan.loanAmount,0),
    }
  })
  return (
    <div className='bg-base-200 p-2 rounded-sm'>
        <h3>Loans</h3>
        <div className="bg-white h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            height={300}
            width={600}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3" />
            <Tooltip />
            <XAxis dataKey="label" />
            <YAxis />
            <Area
              dataKey="totalLoans"
              type="monotone"
              stroke="red"
              fill="orange"
              
              unit="$"
            />
            <Area
              dataKey="totalPaid"
              type="monotone"
              stroke="orange"
              fill="blue"
             
              unit="$"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
