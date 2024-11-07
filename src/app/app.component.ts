import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GrandfatherComponent } from './grandfather/grandfather.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,GrandfatherComponent , FormsModule , HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practise-projects';
}
