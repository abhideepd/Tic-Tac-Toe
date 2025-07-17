import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-against-computer-level-1',
  imports: [CommonModule, RouterModule],
  templateUrl: './against-computer-level-1.component.html',
  styleUrl: './against-computer-level-1.component.css'
})
export class AgainstComputerLevel1Component implements OnInit{
  board: string[][]=[];
  currentPlayer: string='X';
  winner: string|null=null;
  moves:number=0;
  boardSize:number=0;
  boardCellLocation:Set<number>=new Set<number>();

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
    let k=0;
    for(let a=0;a<this.boardSize;a++){
      for(let i=0;i<this.boardSize;i++){
          this.boardCellLocation.add(k);
          ++k;
      }
    }
  }

  decode(row:number, col:number):number{
    return (row*this.boardSize)+(col);
  }

  makeMove(row:number, col:number){
    if(this.board[row][col]==='' && !this.winner){
      this.boardCellLocation.delete(this.decode(row,col));
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
        if(this.currentPlayer==='O'){
          this.computerMove();
        }
      }
    }
  }

  getRandomNumbers(min:number, max:number):number{
    return Math.floor(Math.random()*(max-min+1))+min;
  }

  computerMove(){
    const boardSetSize:number=this.boardCellLocation.size;
    const randomBoardLocation:number=this.getRandomNumbers(0, boardSetSize-1);
    const temp=[...this.boardCellLocation];
    const row:number=Math.floor(temp[randomBoardLocation]/this.boardSize);
    const col:number=Math.floor(temp[randomBoardLocation]%this.boardSize);
    this.makeMove(row,col);
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
