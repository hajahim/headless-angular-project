import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'objectkeys'
})

@Injectable()

export class ObjectKeysPipe {

  transform(value: any):any {
    return  Reflect.ownKeys(value);
  }

}