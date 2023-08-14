import { Component, OnInit } from '@angular/core';
import { PhoneBook } from './models/phone-book';
import { PhoneBookService } from './services/phone-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'PhoneBook.UI';
  contact : PhoneBook[] = [];
  contactToEdit?: PhoneBook;

  constructor(private phoneBookService: PhoneBookService)  {}
                                           
  ngOnInit() : void {
    this.phoneBookService.
    getPhoneBooks().
    subscribe((result: PhoneBook[]) => (this.contact = result)) ;
  }

  updatePhoneBookList(contacts: PhoneBook[]) {
    this.contact = contacts;
  }

  initNewContact() {
    this.contactToEdit = new PhoneBook();
  }
  
  editContact(contact: PhoneBook) {
    this.contactToEdit = contact;
  }
}
