import { Injectable, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule, CollectionReference, Query, AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, combineLatest, switchMap, EMPTY } from 'rxjs';
import { environment } from '../../environments/environment';

import { IDataProvider, DataQuery, Condition } from './data.provider';

@Injectable()

export class FirebaseProvider implements IDataProvider {
  
  constructor (private firestore: AngularFirestore) { }

  getAll(query: DataQuery): Observable<any[]> {
    return this.firestore.collection(query.table).valueChanges();
  }

  get(query: DataQuery): Observable<any> {
    let behaviours: any = [];
    behaviours = query.condition?.map( () => new BehaviorSubject(''));
    const items = combineLatest(behaviours)
      .pipe(
        switchMap((conditions) =>
            this.firestore.collection(query.table, ref => {
              let queryConditions: Condition[] = Array.prototype.slice.call(conditions);
              let collectionQuery : CollectionReference | Query = ref;
              queryConditions.forEach((condition: Condition) => {
                if (condition.value) collectionQuery = collectionQuery.where(condition.key, '==', condition.value);
              });
              return collectionQuery;
            }).valueChanges()
        )
      )
    query.condition?.forEach( (condition, index) => behaviours[index].next(condition));
    return items;
  }

  update(query: DataQuery): Observable<any> {
    return EMPTY;
  }
  
}

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfiguration),
    AngularFirestoreModule
  ]
})

export class FirebaseModule { }