interface ReceiverUserType {
    _id: string;
    name: string;
    email: string;
    phone: string;
}

export interface ReceiverType {
    userId:ReceiverUserType;
    amountReceived: number;
}