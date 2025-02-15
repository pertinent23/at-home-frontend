import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../ui/nav-bar/nav-bar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-exercise',
  imports: [NavBarComponent, NgIf],
  templateUrl: './add-exercise.component.html',
  styleUrl: './add-exercise.component.scss'
})
export class AddExerciseComponent implements OnInit {
  progressBar: number = 0;
  video: string = '';

  ngOnInit(): void {
    document.getElementById('video')?.addEventListener('change', (el) => {
      if (el instanceof HTMLSelectElement) {
        console.log(el)
      }
    });
  }

  goBack() {
    window.history.back();
  }
}
