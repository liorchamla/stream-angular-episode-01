import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { Calculator } from './calculator';

/**
 * Décorateur @Directive : Permet d'indiquer à Angular que cette classe
 * est une directive qui devra être greffée sur chaque élément
 * qui correspond au selector CSS (ici : tous les éléments qui ont
 * un attribut "highlight")
 */
@Directive({
  selector: '[highlight]',
})
export class Highlight implements OnInit {
  private calculator: Calculator;

  /**
   * HostBinding : Quoique puisse contenir la propriété bgColor, elle sera
   * liée à la propriété style.backgroundColor de l'élément
   * HTML. Si la propriété bgColor change, alors l'élément
   * changera aussi
   */
  @HostBinding('style.backgroundColor')
  /**
   * Input : Par défaut, bgColor contiendra "yellow", mais si l'
   * élément HTML possède un attribut "bg-color" (exemple :
   * bg-color="blue") alors c'est cette valeur qui sera contenue dans
   * la propriété bgColor. Si dans le HTML pour une raison ou une autre
   * l'attribut change, la propriété changera aussi
   */
  @Input('bg-color')
  bgColor = 'yellow';

  /**
   * HostBinding : Quoique l'on mette dans la propriété fontColor
   * la valeur sera liée à la propriété 'style.color' de l'élément
   * HTML
   */
  @HostBinding('style.color')
  fontColor = '#333';

  /**
   * HostListener : Quand un événement "click" aura lieu sur l'élément
   * HTML, alors Angular appellera la fonction onClick()
   */
  @HostListener('click')
  onClick() {
    this.bgColor = 'lightgreen';

    console.log('Je calcule la TVA : ', this.calculator.calculate(100));
  }

  /**
   * Injection de dépendances : Lorsque Angular va construire la
   * directive, il va voir qu'on a besoin d'une instance de Calculator
   * et va la construire pour nous avant de la passer à notre Directive
   */
  constructor(calculator: Calculator) {
    this.calculator = calculator;
  }

  ngOnInit() {}
}
