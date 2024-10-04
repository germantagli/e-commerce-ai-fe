import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingService } from '../../services/routing-servives';
import { AppRoutes } from '../../enums/route.enum';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [FormsModule, CommonModule]  // Importa FormsModule aquí
})

export class LoginComponent {
  phoneNumber: string = '';
  verificationCode: string = '';
  message: string = '';
  showCodeSection: boolean = false;

  constructor(public routingService: RoutingService) {}

  sendVerificationCode() {
    if (this.phoneNumber) {
      // this.http.post('http://localhost:3000/send-verification', { phoneNumber: this.phoneNumber })
      //   .subscribe(response => {
      //     this.message = 'Código de verificación enviado.';
        this.showCodeSection = true;
      //   }, error => {
      //     this.message = 'Error al enviar el código.';
      //   });
    } else {
      // this.message = 'Por favor, ingresa un número de teléfono.';
    }
  }

  verifyCode() {
    // this.http.post('http://localhost:3000/verify-code', { phoneNumber: this.phoneNumber, code: this.verificationCode })
    //   .subscribe(response => {
    //     this.message = 'Código verificado exitosamente.';

    //   }, error => {
    //     this.message = 'Código de verificación incorrecto.';
    //   });
    this.routingService.navigateTo(AppRoutes.Home);
  }
}
