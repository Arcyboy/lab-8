import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Q: number | null = null; 
  W: number | null = null; 
  deltaU: number | null = null; 
  result: string | null = null;

  compute() {
    if (this.Q !== null && this.W !== null) {
      
      this.deltaU = this.Q - this.W;
      this.result = `ΔU = ${this.deltaU.toFixed(2)} J`;
    } else if (this.deltaU !== null && this.W !== null) {
    
      this.Q = this.deltaU + this.W;
      this.result = `Q = ${this.Q.toFixed(2)} J`;
    } else if (this.deltaU !== null && this.Q !== null) {
      
      this.W = this.Q - this.deltaU;
      this.result = `W = ${this.W.toFixed(2)} J`;
    } else {
      this.result = 'Please provide at least two values.';
    }
  }
}
