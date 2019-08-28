export class AddUser {
    constructor(
        public id: number,
        public fname: string,
        public lname: string,        
        public bdate: Date,        
        public phoneNum: string,
        public email: string,
        public pincode: number
    ) { }    
}