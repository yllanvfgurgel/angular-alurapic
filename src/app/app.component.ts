import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  photos: any[] = [];

  constructor(private photoService: PhotoService) { } //Utilizar constructor apenas para injeção de dependência
  
  ngOnInit(): void {

    this.photoService
      .listFromUser('flavio')
      .subscribe(photos => {
        this.photos = photos;
    });

  }
  

}
