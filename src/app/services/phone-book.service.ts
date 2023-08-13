import { Injectable } from '@angular/core';
import { PhoneBook } from '../models/phone-book';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {
  private url = "PhoneBooks";

  constructor(private http: HttpClient) { }

  public getPhoneBooks() : Observable<PhoneBook[]> {
    return this.http.get<PhoneBook[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updatePhoneBook(contact : PhoneBook) : Observable<PhoneBook[]> {
    return this.http.put<PhoneBook[]>(
      `${environment.apiUrl}/${this.url}`,
      contact
      );
  }

  public createPhoneBook(contact : PhoneBook) : Observable<PhoneBook[]> {
    return this.http.post<PhoneBook[]>(
      `${environment.apiUrl}/${this.url}`,
      contact
      );
  }

  public deletePhoneBook(contact : PhoneBook) : Observable<PhoneBook[]> {
    return this.http.delete<PhoneBook[]>(
      `${environment.apiUrl}/${this.url}/${contact.id}`
      );
  }
}

