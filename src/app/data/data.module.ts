import { NgModule } from '@angular/core';
import { FirebaseModule, FirebaseProvider } from './firebase.provider';
import { IDataProvider } from './data.provider';

@NgModule({
  imports: [
    FirebaseModule
  ],
  providers: [
    { provide: IDataProvider, useClass: FirebaseProvider }
  ]
})

export class DataModule { }