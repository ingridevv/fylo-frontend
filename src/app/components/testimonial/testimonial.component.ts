import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'testimonial-card',
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {
  @Input("img-path") imgPath: string ="/default-image.jpg";
  @Input("card-feedback") cardFeedback: string = '';
  @Input("card-name") cardName: string = '';
  @Input("card-profession") cardProfession: string = '';
  
}
