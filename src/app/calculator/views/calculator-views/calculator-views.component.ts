import { CalculatorComponent } from '@/calculator/components/calculator/calculator.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'calculator-views',
  standalone: true,
  imports: [
    CalculatorComponent
  ],
  templateUrl: './calculator-views.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalculatorViewsComponent {

}
