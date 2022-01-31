import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'objectkeys'
})

@Injectable()

export class ObjectKeysPipe {

  transform(value: any):any {
    const keys = Reflect.ownKeys(value);
    return keys;
  }

}