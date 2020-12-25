import {Injectable} from '@angular/core';

const addon = require('../../native-addons/fibonacci-addon.node');

@Injectable({
  providedIn: 'root',
})
export class FibonacciAddonService {
  get(): number[] {
    return addon.get();
  }

  clear(): number {
    return addon.clear();
  }
}
