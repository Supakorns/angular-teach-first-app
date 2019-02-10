import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({  //decorator
  selector: 'app-card', //name of this component ตัวระบุชื่อ
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  constructor() { }

  ngOnInit() {
  }
  upVote(){
    this.card.votes +=1;
  }
  downVote(){
    this.card.votes--;
  }
}
