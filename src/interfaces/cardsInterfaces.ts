
export interface ICardData {
        title: string;
        cardNumber: string;
        holderName: string;
        securityCode: string;
        expirationDate: string;
        password:string;
        isVirtual: boolean;
        type: cardTypes;
}
 type cardTypes = 
    | "CREDIT"
    | "DEBT"
    | "BOTH";
 