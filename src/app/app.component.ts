import {Component} from '@angular/core';
import {FibonacciAddonService} from './fibonacci-addon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrayFibonacci: number[] = [];

  constructor(
    private fibonacci: FibonacciAddonService
  ) {}

  onGet() {
    this.arrayFibonacci = this.fibonacci.get();
  }

  onClear() {
    this.fibonacci.clear();
    this.arrayFibonacci = [];
  }
}
