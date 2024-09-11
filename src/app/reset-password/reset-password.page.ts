import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: 'reset-password.page.html',
  styleUrls: ['reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string ="";

  constructor(private router: Router) {}

  resetPassword() {
    // Aquí iría la lógica de reset de contraseña
    if (this.email !== null && this.email !== undefined && this.email !== "") {
      alert('El correo para restablecer su contraseña fue enviado a \n' + this.email);
      this.router.navigate(['/login']);
    } else {
      alert('Por favor ingrese un correo electrónico');
    }
  }
}