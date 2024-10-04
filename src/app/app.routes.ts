import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // Ruta por defecto
    { path: 'cursos', component: CursosComponent }, // Ruta para listar cursos
    { path: 'cursos/:id', component: CourseDetailComponent }, // Ruta para los detalles del curso
    { path: 'login', component: LoginComponent }, // Ruta para iniciar sesión
    { path: 'cart', component: CartComponent }, // Ruta para el carrito
    { path: 'register', component: RegisterComponent }, // Ruta para registro
    { path: 'check-out', component: CheckoutComponent }, // Ruta para registro
    { path: 'user-profile', component: UserProfileComponent }, // Ruta para perfil de usuario
    // { path: '**', redirectTo: '' } // Redirige a inicio si la ruta no existe
  ];

  