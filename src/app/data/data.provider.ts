import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';

export interface DataQuery {
  table: string
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
  getAll(query: DataQuery) : Observable<any> {
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