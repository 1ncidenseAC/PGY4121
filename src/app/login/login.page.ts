import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Aquí puedes agregar la lógica de autenticación
    if (this.username && this.password) {
      // Simulación de autenticación exitosa
      this.router.navigate(['/productos']);
    } else {
      alert('Datos incompletos o incorrectos');
    }
  }
}



