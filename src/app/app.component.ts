import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapHomeComponent } from "./map-home/map-home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'google-map-integration';
}
