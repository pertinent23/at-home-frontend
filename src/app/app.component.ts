import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'A La Maison';

  ngOnInit(): void {
    document.addEventListener("readystatechange", (event) => {
      if (document.readyState === "complete")
        Array.from(document.getElementsByClassName('loader')).map(el => {
          if(window.innerWidth<500)
            el.remove();
        });
    });
  }
}
