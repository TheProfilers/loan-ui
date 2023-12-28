export interface LoanType{
    _id?: string;
    loanAmount:number
    amountPaid:number
    totalLoanAmount?:number
    loanReason:string
    servedBy:string
    loanee:string
    created_at?: string;
}