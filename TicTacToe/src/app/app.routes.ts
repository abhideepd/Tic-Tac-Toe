import { Routes } from '@angular/router';
import { GameComponent } from './component/game/game.component';
import { AgainstComputerLevel1Component } from './component/against_computer/against-computer-level-1/against-computer-level-1.component';
import { ComputeragainstcomputerComponent } from './component/computeragainstcomputer/computeragainstcomputer.component';

export const routes: Routes = [
  {
    path : '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path : 'simple_game/:dimension',
    component: GameComponent
  },
  {
    path : 'against_computer_level_1/:dimension',
    component: AgainstComputerLevel1Component
  },
  {
    path : 'computer_against_computer/:dimension',
    component: ComputeragainstcomputerComponent
  }
];
