import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingService } from '../../services/routing-servives';
import { AppRoutes } from '../../enums/route.enum';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  phoneNumber: string = '';
  email: string = '';
  message: string = '';

  constructor(public routingService: RoutingService) {}


  register() {
    // if (this.phoneNumber && this.email) {
    //   this.http.post('http://localhost:3000/register', { phoneNumber: this.phoneNumber, email: this.email })
    //     .subscribe(response => {
    //       this.message = 'Registro exitoso. Se ha enviado un código de verificación a tu teléfono.';
    //     }, error => {
    //       this.message = 'Error al registrarse. Intenta nuevamente.';
    //     });
    // } else {
    //   this.message = 'Por favor, ingresa un número de teléfono y un correo electrónico.';
    // }
    this.routingService.navigateTo(AppRoutes.Login);
  }

}
