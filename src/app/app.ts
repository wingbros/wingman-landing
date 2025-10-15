import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from "./hero/hero";
import { HowItWorks } from "./how-it-works/how-it-works";
import { WhyWingman } from "./why-wingman/why-wingman";
import { Testimonials } from "./testimonials/testimonials";
import { DownloadCta } from "./download-cta/download-cta";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [Hero, HowItWorks, WhyWingman, Testimonials, DownloadCta, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('wingman-landing');
}
