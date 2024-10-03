import { Component } from '@angular/core';
import {Comic} from "../comic";
import {ApiService} from "../services/api.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-comic',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-comic.component.html',
  styleUrl: './add-comic.component.css'
})
export class AddComicComponent {
  comic: Comic = {
    serie: '',
    titre: '',
    numeroAlbum: 0,
    editeur: ''
  };

  constructor(private comicService: ApiService) { }

  addComic(): void {
    this.comicService.addComic(this.comic).subscribe(result => {
      console.log('Comic added:', result);
    });
  }

}
