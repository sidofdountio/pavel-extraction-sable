import { Component } from '@angular/core';
import { FooterAppComponent } from "../../footer-app/footer-app.component";
import { RouterLink } from '@angular/router';
// import {MatButtonModule} from '@angular/ma'

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [FooterAppComponent,RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
