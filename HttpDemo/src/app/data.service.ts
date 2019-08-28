import { Injectable } from '@angular/core';
import { AddUser } from './add-user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    url = "http://localhost:3000/jsonData";
    constructor(private httpClient: HttpClient) { }

    createUsersData(user: AddUser): Observable<void> {
        return this.httpClient.post<void>(this.url, user);
    }

    getUsersData(): Observable<AddUser[]> {
        return this.httpClient.get<AddUser[]>(this.url);
    }

    getUserByID(id: number): Observable<AddUser> {
        return this.httpClient.get<AddUser>(`${this.url}/${id}`);
    }

    deleteUserByID(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.url}/${id}`);
    }

    updateUserByID(user: AddUser, id: number) {
        return this.httpClient.put(this.url + '/' + id, user);
    }
}
