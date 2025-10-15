import { Component } from '@angular/core';
import { LucideAngularModule, Smartphone } from 'lucide-angular';

@Component({
  selector: 'app-download-cta',
  imports: [LucideAngularModule],
  templateUrl: './download-cta.html',
  styleUrl: './download-cta.css'
})
export class DownloadCta {
  readonly Smartphone = Smartphone;
}
