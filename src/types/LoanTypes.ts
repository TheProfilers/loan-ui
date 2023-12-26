import { LoaneesType } from "./LoaneeType";
import { UserTypes } from "./UserTypes";

export interface LoaneTypes{
    _id: string;
    loanAmount:number
    totalLoanAmount?:number
    loanReason:string
    servedBy:UserTypes
    loanee:LoaneesType
}