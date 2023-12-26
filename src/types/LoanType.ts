export interface LoanType{
    _id: string;
    loanAmount:number
    totalLoanAmount?:number
    loanReason:string
    servedBy:string
    loanee:string
}