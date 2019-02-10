export class Card {
    firstName: string;
    lastName: string;
    votes: number;
    constructor (
        firstName: string,   //การที่จะ new class แล้วค่านี้เป็นค่าเริ่มต้น
        lastName: string,
        votes: number
        ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.votes = votes;
    }
    get name(): string {    // get method แบบ get set
        return this.firstName + ' ' + this.lastName
    }
}
