import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from "../header/header.component";
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { BenefitComponent } from "../benefit/benefit.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent, HeaderComponent, NewsletterComponent, TestimonialComponent, BenefitComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
