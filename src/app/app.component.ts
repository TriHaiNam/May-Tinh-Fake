import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { congSo, truSo, nhanSo, chiaSo, reset } from './counter.action'; // Import reset here
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TrangThai';
  count$?: Observable<number>;
  soA: string = '';
  soB: string = '';
  operation: string = '';
  currentOperation: string = '';
  isEnteringSoA: boolean = true;
  result: number | null = null;
  display: string = ''; // New property to store the current display value

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = this.store.select('counter');
  }

  enterDigit(digit: string) {
    if (this.isEnteringSoA) {
      this.soA += digit;
    } else {
      this.soB += digit;
    }
    this.display += digit; // Append digit to display
  }

  setOperation(op: string) {
    this.operation = op;
    this.currentOperation = op;
    this.isEnteringSoA = false;
    this.display += ` ${op} `; // Append operation to display
  }

  calculate() {
    const soA = parseFloat(this.soA);
    const soB = parseFloat(this.soB);

    switch (this.operation) {
      case '+':
        this.store.dispatch(congSo({ soA, soB }));
        break;
      case '-':
        this.store.dispatch(truSo({ soA, soB }));
        break;
      case '*':
        this.store.dispatch(nhanSo({ soA, soB }));
        break;
      case '/':
        this.store.dispatch(chiaSo({ soA, soB }));
        break;
    }

    this.count$?.subscribe((result) => {
      this.result = result;
      this.soA = result.toString();
      this.soB = '';
      this.isEnteringSoA = true;
      this.display = result.toString(); // Clear display and show only the result
    });
  }

  reset() {
    this.store.dispatch(reset());
    this.soA = '';
    this.soB = '';
    this.operation = '';
    this.currentOperation = '';
    this.isEnteringSoA = true;
    this.result = null;
    this.display = ''; // Reset display
  }
}
