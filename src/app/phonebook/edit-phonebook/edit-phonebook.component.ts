import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PhoneBook } from 'src/app/models/phone-book';
import { PhoneBookService } from 'src/app/services/phone-book.service';

@Component({
  selector: 'app-edit-phonebook',
  templateUrl: './edit-phonebook.component.html',
  styleUrls: ['./edit-phonebook.component.css']
})
export class EditPhonebookComponent implements OnInit {
  @Input() contact?: PhoneBook;
  @Output() contactUpdated = new EventEmitter<PhoneBook[]>();

  constructor(private phoneBookService : PhoneBookService) {}

  ngOnInit(): void {}

  updatePhoneBook(contact: PhoneBook) {
    this.phoneBookService
      .updatePhoneBook(contact)
      .subscribe((contact: PhoneBook[]) => this.contactUpdated.emit(contact));
    
  }

  deletePhoneBook(contact: PhoneBook) {
    this.phoneBookService
    .deletePhoneBook(contact)
    .subscribe((contact: PhoneBook[]) => this.contactUpdated.emit(contact));
  }

  createPhoneBook(contact: PhoneBook) {
    this.phoneBookService
      .createPhoneBook(contact)
      .subscribe((contact: PhoneBook[]) => this.contactUpdated.emit(contact));
  }
  }