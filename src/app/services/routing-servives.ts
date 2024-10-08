import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  constructor(private router: Router) {}

  navigateTo(ruta: string) {
    this.router.navigate([`${ruta}`]);
  }

}