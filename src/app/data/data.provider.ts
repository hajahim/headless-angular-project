import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';

export interface Condition {
  key: string,
  value: string
}

export interface DataQuery {
  table: string,
  condition?: Array<Condition>
};

@Injectable({
  providedIn: 'root'
})

/**
 * generic data provider class
*/
export class IDataProvider {

  /**
   * should return empty data if not implemented
   * @returns generic type
   */
  getAll(query: DataQuery) : Observable<any[]> {
    return EMPTY;
  }

  /**
   * should return empty data if not implemented
   * @returns generic type
   */
  get(query: DataQuery) : Observable<any> {
    return EMPTY;
  }

  /**
   * should return empty data if not implemented
   * @returns generic type
   */
  update(query: DataQuery) : Observable<any> {
    return EMPTY;
  }

}