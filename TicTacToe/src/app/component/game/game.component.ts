import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-game',
  imports: [CommonModule, RouterModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
  board: string[][]=[];
  currentPlayer: string='X';
  winner: string|null=null;
  moves:number=0;
  boardSize:number=0;

  constructor(private route:ActivatedRoute, private router:Router){

  }

  ngOnInit() {
    this.route.paramMap.subscribe(()=>{
      this.startGame();
    });
  }

  newGame(){
    this.router.navigate(['']);
  }

  startGame(){
    this.boardSize=3;
    const value:number=Number(this.route.snapshot.paramMap.get('dimension'));
    if(value!=null && value>0){
      this.boardSize=Number(value);
    }
    this.resetBoard();
  }

  resetBoard(){
    this.board=Array(this.boardSize).fill(null).map(()=>Array(this.boardSize).fill(''));
    this.currentPlayer='X';
    this.winner=null;
    this.moves=0;
  }

  makeMove(row:number, col:number){
    if(this.board[row][col]==='' && !this.winner){
      this.board[row][col]=this.currentPlayer;
      this.moves++;
      if(this.checkWinner(row, col)){
        this.winner=this.currentPlayer;
      }
      else if(this.moves===(this.boardSize*this.boardSize)){
        this.winner='Draw';
      }
      else{
        this.currentPlayer=this.currentPlayer==='X'?'O':'X';
      }
    }
  }

  checkWinner(row:number, col:number):boolean{
    const player=this.currentPlayer;
    if(this.board[row].every(cell=>cell===player)){
      return true;
    }
    if(this.board.every(r=>r[col]===player)){
      return true;
    }
    if(row===col && this.board.every((r,i)=>r[i]===player)){
      return true;
    }
    if(row+col === (this.boardSize-1) && this.board.every((r,i)=>r[(this.boardSize-1)-i]===player)){
      return true;
    }
    return false;
  }

}
