import { CommonModule } from '@angular/common'
import { Component } from '@angular/core';

@Component({
  selector: 'app-enterprises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enterprises.component.html',
  styleUrl: './enterprises.component.css'
})
export class EnterprisesComponent {
  safeEmail(email: string): string {
    return email.replace('@', '&#64;');
  }

  contactEmail = 'usuarioapellido@hotmail.com';
}
