export interface GlobalError {
    error: string;
}

export interface LoginData {
    username: string;
    password: string;
}

export interface LoginSuccess {
    token: string;
    isAdmin: boolean;
}

export interface TokenVerificationSuccess {
    username: string;
    isAdmin: boolean;
}

export interface Message{
    sendBy: string;
    body: string;
    sendAt: string;
}

export interface Folder{
    _id: string;
    userId: string;
    messages: Message[];
    video: string;
    videoCreationTime: string;
    record: string;
    recordedAt: string;
    comment: string;
    createdAt: string;
}

export interface User{
    _id: string;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    age: string | number;
}

export interface CreateUser{
    username: string;
    firstname: string;
    lastname: string;
    age: number | string;
}