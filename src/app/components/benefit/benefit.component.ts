import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'benefit-card',
  imports: [],
  templateUrl: './benefit.component.html',
  styleUrl: './benefit.component.css'
})
export class BenefitComponent {
    @Input("imgPath") imgPath: string = "";
    @Input("benefit-title") benefitTitle: string = "";
    @Input("benefit-description") benefitDescription: string = "";
}
