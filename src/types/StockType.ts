import { UserTypes } from "./UserTypes";

export interface StockType{
    _id:string,
    amount:number,
    status:string,
    belongsTo:UserTypes
    amountRequested:number,
    requestedBy:ReceiveedBy[],
    createdAt:string,
}
interface ReceiveedBy{
    userId:UserTypes,
    amountRequested:number,
    time:string,
}