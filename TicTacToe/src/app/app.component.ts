import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TicTacToe';

  constructor(private router:Router){

  }

  createGame(option:string,boardSize:string){
    if(option==="1"){
      this.createSimpleGame(boardSize);
    }
    if(option==="2"){
      this.creatGameAgainstComputer(boardSize);
    }
    if(option==="3"){
      this.creatGameComputerAgainstComputer(boardSize);
    }
  }

  createSimpleGame(boardSize:string){
    this.router.navigate(['simple_game', boardSize]);
  }
  creatGameAgainstComputer(boardSize:string){
    this.router.navigate(['against_computer_level_1', boardSize]);
  }
  creatGameComputerAgainstComputer(boardSize:string){
    this.router.navigate(['computer_against_computer', boardSize]);
  }
}
