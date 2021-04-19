import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { Calculator } from './calculator';

@Directive({
  selector: '[highlight]',
})
export class Highlight implements OnInit {
  private calculator: Calculator;

  @HostBinding('style.backgroundColor')
  @Input('bg-color')
  bgColor = 'yellow';

  @HostBinding('style.color')
  fontColor = '#333';

  @HostListener('click')
  onClick() {
    this.bgColor = 'lightgreen';

    console.log('Je calcule la TVA : ', this.calculator.calculate(100));
  }

  constructor(calculator: Calculator) {
    this.calculator = calculator;
  }

  ngOnInit() {}
}
