import { Component } from '@angular/core';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  characters: any = {};

  constructor(private service: CharactersService) {
    this.service.getAllCharacters().subscribe(characters => {
        this.characters = characters.results;
        console.log(this.characters)
    })
  }
}
