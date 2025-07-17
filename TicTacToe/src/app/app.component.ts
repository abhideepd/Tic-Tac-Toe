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
