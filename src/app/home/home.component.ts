import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isViewButtonClicked : boolean = false;
  persons : {name: string, age: number}[] = [
    {
      name: 'Heshan',
      age: 27
    },
    {
      name: 'Kavinda',
      age: 34
    },
    {
      name: 'Tharindu',
      age: 45
    }
  ]

  onClickView(){
    this.isViewButtonClicked = !this.isViewButtonClicked;
  }

}
