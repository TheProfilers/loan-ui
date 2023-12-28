
export default function DownloadColumnText({title, text}: {title: string, text: string}) {
  return (
    <div className='flex-container'>
    <h1 className="font-medium text-lg">{title}</h1>
    <p className="">{text}</p>
</div>
  )
}
