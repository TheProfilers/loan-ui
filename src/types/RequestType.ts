import { UserTypes } from "./UserTypes";

export interface RequestType{
    _id:string,
    amountRequested:number,
    status:string,
    stockId:string,
    createdAt:string,
    requester:UserTypes,
}