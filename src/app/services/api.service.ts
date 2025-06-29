import { inject, Injectable } from '@angular/core';
import axios,{ AxiosInstance, AxiosResponse } from 'axios';
import { CreateUser, Folder, GlobalError, LoginData, LoginSuccess, Message, TokenVerificationSuccess, User } from '../app.types';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private axiosInstance: AxiosInstance;
  private cookie = inject(CookieService);

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://at-home-serveur-6469926e5949.herokuapp.com/api",
      withCredentials: true,
      timeout: 60000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.cookie.get('token')
      },
    });
  }

  login(data: LoginData): Promise<AxiosResponse<LoginSuccess>> {
    return this.axiosInstance.post('/users/login', data);
  }

  verifyToken(): Promise<AxiosResponse<TokenVerificationSuccess>> {
    return this.axiosInstance.post('/users/is-valid-token', { token: this.cookie.get('token') });
  }

  getMyFolder(): Promise<AxiosResponse<Folder>> {
    return this.axiosInstance.get('/folders/folder');
  }

  getFolderById(id: string): Promise<AxiosResponse<Folder>> {
    return this.axiosInstance.get(`/folders/folder/${id}`);
  }

  getUserById(id: string): Promise<AxiosResponse<User>> {
    return this.axiosInstance.get(`/users/get/${id}`);
  }

  getMessagesById(id: string): Promise<AxiosResponse<Message[]>> {
    return this.axiosInstance.get(`/folders/messages/${id}`);
  }

  getMyMessage(): Promise<AxiosResponse<Message[]>> {
    return this.axiosInstance.get(`/folders/messages`);
  }

  sendMessagesByAdmin(id: string, mss: string): Promise<AxiosResponse<Message[]>> {
    return this.axiosInstance.post(`/folders/message/${id}`, {data: mss});
  }

  sendMessagesByUser(mss: string): Promise<AxiosResponse<Message[]>> {
    return this.axiosInstance.post(`/folders/message`, {data: mss});
  }

  postRecord(data: string, comment: string): Promise<AxiosResponse> {
    return this.axiosInstance.post(`/folders/record`, {data, comment});
  }

  postVideo(userId: string, video: string): Promise<AxiosResponse> {
    return this.axiosInstance.post(`/folders/video/${userId}`, {data: video});
  }

  createUser(user: CreateUser): Promise<AxiosResponse> {
    return this.axiosInstance.post(`/users/create`, user);
  }

  deleteUser(id: string): Promise<AxiosResponse> {
    return this.axiosInstance.delete(`/users/delete/${id}`);
  }

  getFolderList(): Promise<AxiosResponse<Folder[]>> {
    return this.axiosInstance.get('/folders/list');
  }

  getUserList(): Promise<AxiosResponse<User[]>> {
    return this.axiosInstance.get('/users/list');
  }
}
