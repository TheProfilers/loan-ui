
export default function ColumnText({title, text}: {title: string, text: string}) {
  return (
    <div className='flex flex-col items-start justify-start'>
        <h1 className="font-medium text-lg">{title}</h1>
        <p className="">{text}</p>
    </div>
  )
}
