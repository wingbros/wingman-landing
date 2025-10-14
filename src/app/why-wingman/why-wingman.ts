import { Component } from '@angular/core';
import { Sparkles, Shield, Users, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-why-wingman',
  imports: [LucideAngularModule],
  templateUrl: './why-wingman.html',
  styleUrl: './why-wingman.css'
})
export class WhyWingman {
  readonly Sparkles = Sparkles;
  readonly Shield = Shield;
  readonly Users = Users;
}
