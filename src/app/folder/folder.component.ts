import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from '../ui/nav-bar/nav-bar.component';
import { NgIf } from '@angular/common';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-folder',
  imports: [NavBarComponent, NgIf],
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.scss'
})
export class FolderComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private api = inject(ApiService);
  private loader = inject(LoaderService);

  userId: string;
  firstname: string = 'Gaudu';
  lastname: string = 'David';
  age: number = 30;
  username: string = "davidgaudu";
  source: string = "";
  lastdate: string = "12/35/27";

  constructor() {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    if(this.userId) {
      this.api.getUserById(this.userId)
      .then(res => res)
      .then(res => {
        this.firstname = res.data.firstname;
        this.lastname = res.data.lastname;
        this.age = Number(res.data.age);
        this.username = res.data.username;

        this.api.getFolderById(this.userId)
          .then(res => res)
          .then(res => {
            const date = new Date(res.data.recordedAt);
            if (res.data.record != "NAN")
              this.source = res.data.record;
            this.lastdate = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
          })
          .catch(err => {
            console.log(err)
            window.location.href = "/login";
          });
      })
      .catch(err => {
        console.log(err)
        window.location.href = "/login";
      });
    }
  }

  goBack() {
    window.history.back();
  }

  sendMessage() {
    window.location.href = `/message/${this.userId}`;
  }

  addExercise() {
    window.location.href = `/add-exercise/${this.userId}`
  }

  deleteUser() {
    if (confirm("Vous vous vraiment supprimer cet utilisateur ?")) {
      this.loader.show();
      this.api.deleteUser(this.userId)
        .then(res => {
          console.log(res);
          window.location.href = "/folders";
        })
        .catch(err => {
          console.error(err);
          alert("Erreur lors de la suppression de l'utilisateur.");
        })
        .finally(() => {
          this.loader.hide();
        });
    }
  }
}
