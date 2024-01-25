import { ShopType } from "../../types/ShopType";

export default function ShopItem({shop}:{shop:ShopType}) {
  return (
    
         <div
      className="p-2 mb-1 shadow-sm bg-white rounded-sm hover:bg-blue-50 duration-200 cursor-pointer flex justify-between w-full items-center">
    <div className="flex gap-2">
      
      <div>
        <p className="capitalize font-semibold">{shop.name}</p>
        <p className="text-slate-500 text-sm">{shop. country}</p>
      </div>
    </div>
    </div>
    
  )
}
