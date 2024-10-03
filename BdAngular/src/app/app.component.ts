import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComicListComponent} from "./comic-list/comic-list.component";
import {AddComicComponent} from "./add-comic/add-comic.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComicListComponent, AddComicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BdAngular';
}
