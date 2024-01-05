import { LoaneesType } from "./LoaneeType";
import { ReceiverType } from "./ReceiverType";
import { UserTypes } from "./UserTypes";

export interface LoaneTypes{
    _id: string;
    loanAmount:number
    amountPaid:number
    totalLoanAmount?:number
    loanReason:string
    servedBy:UserTypes
    loanee?:LoaneesType
    createdAt?:string
    updatedAt?:string
    receivedBy?:ReceiverType[]

}