import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComicListComponent} from "./comic-list/comic-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComicListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BdAngular';
}
