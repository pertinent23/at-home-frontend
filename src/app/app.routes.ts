import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserMainContentComponent } from './user-main-content/user-main-content.component';
import { UserRecordContentComponent } from './user-record-content/user-record-content.component';
import { UserMessageComponent } from './user-message/user-message.component';
import { AdminComponent } from './admin/admin.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FolderListComponent } from './folder-list/folder-list.component';
import { FolderComponent } from './folder/folder.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';

export const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "admin", component: AdminComponent},
  {path: "create-user", component: CreateUserComponent},
  {path: "add-exercise/:id", component: AddExerciseComponent},
  {path: "message", component: UserMessageComponent},
  {path: "message/:id", component: UserMessageComponent},
  {path: "admin-message", component: MessagesListComponent},
  {path: "folders", component: FolderListComponent},
  {path: "folder/:id", component: FolderComponent},
  {path: "home", component: UserHomeComponent, children: [
    {path: "", component: UserMainContentComponent},
    {path: "record", component: UserRecordContentComponent }
  ]},
  {path: "sign-up", component: SignUpComponent},
  { path: '',   redirectTo: "/login", pathMatch: "full" },
  { path: '**', redirectTo: "/login" }
];
