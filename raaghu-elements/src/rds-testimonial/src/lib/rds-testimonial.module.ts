import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { RdsTestimonialComponent } from './rds-testimonial.component';



@NgModule({
  declarations: [
    RdsTestimonialComponent
  ],
  imports: [ RdsIconModule,CommonModule
  ],
  exports: [
    RdsTestimonialComponent
  ]
})
export class RdsTestimonialModule { }
