import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputNumber!: number;
  convertedText!: string;

  convert() {
    this.convertedText = this.inputNumber === undefined ? '' : this.inputNumber.toString();
  }
}
