import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext : boolean;
  winner : string; 
  ranNum : number; 
  constructor() { }

  ngOnInit(): void {
    this.newGame(); 
  }

  getRandomInt(max : number ){ 
    return Math.floor(Math.random() * max);
  }

  newGame() { 
    this.squares = Array(9).fill(null);
    this.ranNum = this.getRandomInt(5);
    this.xIsNext = this.ranNum >=3 ? true : false ; 
    this.winner = null;
  }

 

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) { 
    if(!this.squares[idx]){ 
      this.squares.splice(idx, 1 ,this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner(); 
    
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
