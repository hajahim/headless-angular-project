import { Injectable, NgModule } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { IDataProvider, DataQuery } from './data.provider';

@Injectable({
  providedIn: 'root'
})

export class FirebaseProvider extends IDataProvider {
  
  constructor (private firestore: Firestore) { super(); }

  override getAll(query: DataQuery): Observable<any> {
    const targetedCollection = collection(this.firestore, query.table);
    return collectionData(targetedCollection);
  }
  
}

@NgModule({
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfiguration)),
    provideFirestore(() => getFirestore()),
  ]
})

export class FirebaseModule {};