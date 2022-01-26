import { Injectable, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule, CollectionReference, Query } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, combineLatest, switchMap, OperatorFunction } from 'rxjs';
import { environment } from '../../environments/environment';

import { IDataProvider, DataQuery, Condition } from './data.provider';

@Injectable()

export class FirebaseProvider extends IDataProvider {
  
  constructor (private firestore: AngularFirestore) { super(); }

  override getAll(query: DataQuery): Observable<any[]> {
    const targetedCollection = this.firestore.collection(query.table).valueChanges()
    return targetedCollection;
  }

  override get(query: DataQuery): Observable<any> {
    let behaviours: any = [];
    behaviours = query.condition?.map( () => new BehaviorSubject(''));
    const items = combineLatest(behaviours)
      .pipe(
        switchMap((conditions) =>
            this.firestore.collection(query.table, ref => {
              let queryConditions: Condition[] = Array.prototype.slice.call(conditions);
              let query : CollectionReference | Query = ref;
              queryConditions.forEach((condition: Condition) => {
                if (condition.value) query = query.where(condition.key, '==', condition.value);
              });
              return query;
            }).valueChanges()
        )
      )
    query.condition?.forEach( (condition, index) => behaviours[index].next(condition));
    return items;
  }
  
}

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfiguration),
    AngularFirestoreModule
  ]
})

export class FirebaseModule {};