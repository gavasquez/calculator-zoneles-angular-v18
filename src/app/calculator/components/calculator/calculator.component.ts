import { Component, computed, inject, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorService } from '@/calculator/services/calculator.service';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [
    CalculatorButtonComponent
  ],
  templateUrl: './calculator.component.html',
  /* styles: `
  .is-command {
    @apply bg-indigo-700 bg-opacity-20;
  }
  ` */
  host: {
    '(document:keyup)': 'handleKeyBoardEvent($event)'
  }
})
export class CalculatorComponent {

  private calculatorService = inject(CalculatorService);


  public calculatorButtons = viewChildren(CalculatorButtonComponent); // Selector de todos los botones

  public resultText = computed(() => this.calculatorService.resultText());
  public subResultText = computed(() => this.calculatorService.subResultText());
  public lastOperator = computed(() => this.calculatorService.lastOperator());

  /* get resultText() {
    return this.calculatorService.resultText;
  } */


  handleClick(key: string) {
    this.calculatorService.constructNumber( key );

    console.log({key})
  }

  /* @HostListener('document:keyup', ['$event']) */
  handleKeyBoardEvent(event: KeyboardEvent) {

    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      '*': 'x',
      '/': '÷',
      Enter: '=',
    };

    const key = event.key;
    console.log(key)
    const keyValue = keyEquivalents[key] ?? key
    this.handleClick(keyValue);

    this.calculatorButtons().forEach(button => {
      button.keyboardPressedStyle(keyValue);
    });
  }

}
