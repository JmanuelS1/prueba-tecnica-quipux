import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchQuery: string = '';
  selectedService: string = 'Todos los servicios';

  services = [
    {
      title: 'Certificado',
      description: 'Conoce los beneficios que tenemos para ti al registrarte',
      buttonText: '+ beneficios',
      buttonClass: 'btn-outline-primary'
    },
    {
      title: 'Crear cuenta',
      description: 'Conoce los beneficios que tenemos para ti al registrarte',
      buttonText: 'Ver todo',
      buttonClass: 'btn-outline-success'
    },
    {
      title: 'Top trámites',
      description: 'Conoce los trámites más solicitados.',
      buttonText: 'Ver todo',
      buttonClass: 'btn-outline-success'
    }
  ];

  onSearch() {
    console.log('Searching for:', this.searchQuery);
  }
}