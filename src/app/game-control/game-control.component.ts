import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<{gamescore:Number}>();
  gameRef:any;
  gamescore:number = 0;
  luckyNumber:number = 10
  constructor() { }

  

  ngOnInit() 
  {
     console.log("I have been intialized")
  }

  generateNumber()
  {
    console.log("----- a 2 ----",this.gamescore);
    this.gamescore++;
    //console.log("Game started"+this.gamescore);
  }

  gameStart()
  {
    //this.gamescore = this.gamescore+1
    //this.gameRef = setInterval(this.generateNumber, 1000);
    //this.generateNumber()
    var self = this;
    this.gameRef = setInterval(function() { self.generateNumber() }, 1000);
    console.log("----- a ----",this.gamescore);
  }

  gameStop()
  {
    console.log("I should stop the game");
    clearInterval(this.gameRef);
  }
}
