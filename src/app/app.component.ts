import {Component, OnInit} from '@angular/core';
import { DataApiService} from '../data-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  title = 'my-app';
  data =  [];

  constructor(private dataService: DataApiService) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe(
      (data: any) => {
        this.data = data;
      });
  }
}
