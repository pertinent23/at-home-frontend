import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoaderService } from './services/loader.service';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'A La Maison';
  private readonly loader = inject(LoaderService);
  private readonly sw = inject(SwUpdate);

  hide() {
    if(window.innerWidth<500)
      this.loader.hide();
  }

  ngOnInit(): void {
    if(this.sw.isEnabled) {
      this.sw.checkForUpdate().then(update => {
        if(update) {
          this.sw.activateUpdate();
        }
      });
    }
  }

  ngAfterViewInit(): void {
    this.hide();
  }
}
