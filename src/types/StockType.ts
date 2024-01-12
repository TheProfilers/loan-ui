import { UserTypes } from "./UserTypes";

export interface StockType{
    amount:number,
    status:string,
    belongsTo:UserTypes
    amountRequested:number,
    createdAt:string,
}