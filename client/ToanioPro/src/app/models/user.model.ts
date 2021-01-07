export class User{
    name?:string;
    email?:string;
    password?:string;
    misRishyon?: string;
    phon?: string
    id?:number;
    about?:string;
    img?:string;
    role?:string
    constructor(name:string,email:string,password:string,misRishyon:string,phon:string){
        this.name = name ;
        this.email = email;
        this.password = password ;
        this.misRishyon = misRishyon ;
        this.phon = phon ;

    }
}