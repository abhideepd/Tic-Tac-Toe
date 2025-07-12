import { Routes } from '@angular/router';
import { GameComponent } from './component/game/game.component';
import { AgainstComputerLevel1Component } from './component/against_computer/against-computer-level-1/against-computer-level-1.component';

export const routes: Routes = [
  {
    path : '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path : 'simple_game/:board_size',
    component: GameComponent
  },
  {
    path : 'against_computer_level_1/:board_size',
    component: AgainstComputerLevel1Component
  }
];
