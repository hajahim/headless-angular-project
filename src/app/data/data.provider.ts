import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Condition {
  key: string,
  value: string
}

export interface DataQuery {
  table: string,
  condition?: Array<Condition>
}

@Injectable({
  providedIn: 'root'
})

/**
 * generic data provider class
*/
export abstract class IDataProvider {

  /**
   * should return empty data if not implemented
   * @returns generic type
   */
   abstract getAll(query: DataQuery) : Observable<any[]>;

  /**
   * should return empty data if not implemented
   * @returns generic type
   */
   abstract get(query: DataQuery) : Observable<any>;

  /**
   * should return empty data if not implemented
   * @returns generic type
   */
  abstract update(query: DataQuery) : Observable<any>;

}