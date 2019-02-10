import { Component } from '@angular/core';
import { Card } from './card';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = [];
  // cards: Card[] = new Array();
  get sorted(): Card[]{
    console.log('access')
    return this.cards.sort((a,b) => b.votes - a.votes); // "() =>" มันคือ arrow fn , b.vote - a.vote มากไปน้อย
    
  }
  onclick(firstName: HTMLInputElement,lastName: HTMLInputElement){
    // alert(firstName.value+" "+lastName.value);
    const card =  new Card(firstName.value,lastName.value,0);
    this.cards.push(card);
    // console.log(firstName.value,lastName.value)
    console.log(this.cards);
    firstName.value = '';
    lastName.value = '';
  }
}
