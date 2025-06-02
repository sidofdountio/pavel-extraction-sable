import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterAppComponent } from "./footer-app/footer-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterAppComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pavel-extraction-sable';
}
