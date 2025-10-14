import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Quote } from 'lucide-angular';

@Component({
  selector: 'app-testimonials',
  imports: [LucideAngularModule, CommonModule, NgClass],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials {
  readonly Quote = Quote;
  testimonials = [
    {
      quote: "Conocí a algunos de mis mejores amigos en un concierto a través de Wingman. ¡Es tan refrescante conectar basándose en experiencias compartidas!",
      author: "Ana M.",
      event: "Festival de Música Indie",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      quote: "Finalmente, una app que fomenta la interacción cara a cara. He asistido a tres eventos este mes y he hecho conexiones genuinas cada vez.",
      author: "Carlos L.",
      event: "Conferencia de Tecnología",
      gradient: "from-green-500 to-teal-600",
    },
    {
      quote: "¡La función de foto en vivo es genial! Sabes que todos están realmente ahí. Hace que iniciar conversaciones sea mucho más fácil.",
      author: "María P.",
      event: "Caminata de Arte Comunitario",
      gradient: "from-orange-500 to-pink-600",
    },
  ];
}
