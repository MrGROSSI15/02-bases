import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

public characters: Character[] = [{
  name: 'Goku',
  power: 9001
},{
  name: 'Vegeta',
  power: 9000
},{
  name: 'Gogetta',
  power: 80000
}];

}