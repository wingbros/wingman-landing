import { Component } from '@angular/core';
import { PhoneMockup } from "../phone-mockup/phone-mockup";

@Component({
  selector: 'app-hero',
  imports: [PhoneMockup],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

}
