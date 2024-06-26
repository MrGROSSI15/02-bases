import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 43;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name } - ${ this.age}`
  }

  changeHeroName (): void {

    this.name = 'Spiderman';

  }

  changeHeroAge ():void {

    this.age = 23;

  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 43;
  }

}
