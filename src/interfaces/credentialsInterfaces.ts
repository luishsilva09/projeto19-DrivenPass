export interface IuserData { 
    id:number;
    name:string;
    email:string;
    password:string;
    iat:number;
}
export interface ICredentialData {
    userId?:number;
    title:string;
    credentialName:string;
    rotule:string;
    url:string;
    userName:string;
    password:string;
}

export interface IFindExistData{
    userId:number;
    title:string;
    credentialName:string;
    rotule:string;
}

export interface IinsertData {
    password: string;
    userId: number;
    title: string;
    credentialName: string;
    rotule: string;
    url: string;
    userName: string;
}