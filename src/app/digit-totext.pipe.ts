import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitTotext'
})
export class DigitTotextPipe implements PipeTransform {
  private units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine','Ten'];
  private teens = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  private tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];


  transform(value: number): string {
    if (value === 0) {
      return 'Zero';
    }

    return this.convertNumberToWords(value);
  }
  private convertNumberToWords(value: number): string {
    if (value <= 10) {
      return this.units[value];
    } else if (value < 20) {
      return this.teens[value - 11];
    } else if (value < 100) {
      return this.tens[Math.floor(value / 10)] + ' ' + this.units[value % 10];
    } else if (value < 1000) {
      return this.units[Math.floor(value / 100)] + ' Hundred ' + this.convertNumberToWords(value % 100);
    } else if (value < 100000) {
      return this.convertNumberToWords(Math.floor(value / 1000)) + ' Thousand ' + this.convertNumberToWords(value % 1000);
    } else if (value < 10000000) {
      return this.convertNumberToWords(Math.floor(value / 100000)) + ' Lakh ' + this.convertNumberToWords(value % 100000);
    }
    return '';
  }

}
