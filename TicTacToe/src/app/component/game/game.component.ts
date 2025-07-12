import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
  board: string[][]=[];
  currentPlayer: string='X';
  winner: string|null=null;
  moves:number=0;
  ngOnInit(): void {

  }
  resetBoard(){
    this.board=Array(3).fill(null).map(()=>Array(3).fill(''));
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
      else if(this.moves===9){
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
    if(row+col === 2 && this.board.every((r,i)=>r[2-i]===player)){
      return true;
    }
    return false;
  }
}
