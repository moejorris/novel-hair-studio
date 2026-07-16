import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NovelHairStudioComponent } from './novel-hair-studio/novel-hair-studio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NovelHairStudioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('novel-hair-site');
}
