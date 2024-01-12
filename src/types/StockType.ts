import { UserTypes } from "./UserTypes";

export interface StockType{
    _id:string,
    amount:number,
    status:string,
    belongsTo:UserTypes
    amountRequested:number,
    createdAt:string,
}