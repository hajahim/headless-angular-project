import { Component, OnInit } from '@angular/core';
import { IDataProvider, DataQuery } from './data/data.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'headless-project';

  query: DataQuery = {
    table: 'pages'
  };

  constructor (private dataProvider: IDataProvider) { }

  ngOnInit(): void {
    this.dataProvider.getAll(this.query)
      .subscribe( pages => console.log(pages) );
  }

}
