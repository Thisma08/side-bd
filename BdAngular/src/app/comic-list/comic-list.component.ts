import {Component, OnInit} from '@angular/core';
import {Comic} from "../comic";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-comic-list',
  standalone: true,
  imports: [],
  templateUrl: './comic-list.component.html',
  styleUrl: './comic-list.component.css'
})
export class ComicListComponent implements OnInit {
  comics: Comic[] = [];

  constructor(private comicService: ApiService) { }

  ngOnInit(): void {
    this.comicService.getAllComics().subscribe((data: Comic[]) => {
      this.comics = data;
    });
  }

}
