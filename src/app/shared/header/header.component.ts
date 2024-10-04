import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '../../services/routing-servives';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router, public routingService: RoutingService) {}

}
