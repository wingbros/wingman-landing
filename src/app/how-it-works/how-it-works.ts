import { Component } from '@angular/core';
import { LucideAngularModule, MapPin, Camera, MessageCircle } from 'lucide-angular';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-how-it-works',
  imports: [LucideAngularModule, CommonModule, NgClass],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css'
})
export class HowItWorks {
  steps = [
    {
      icon: MapPin,
      title: 'Descubre',
      description: 'Ve eventos que están pasando cerca de ti',
      color: "from-blue-500 to-blue-700",
      screenBg: "from-gray-900 to-gray-950",
      screenContent: null
    },
    {
      icon: Camera,
      title: "Únete",
      description: "Registra tu entrada con una foto en vivo y un perfil simple.",
      color: "from-green-500 to-green-700",
      screenBg: "from-gray-900 to-gray-950",
      screenContent: null
    },
    {
      icon: MessageCircle,
      title: "Conecta",
      description: "Encuentra y conecta con otros asistentes.",
      color: "from-orange-500 to-orange-700",
      screenBg: "from-gray-900 to-gray-950",
      screenContent: null
    }
  ]
}
