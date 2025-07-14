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
}
