import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ModuleModule} from './module/module.module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ModuleModule
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {

}
