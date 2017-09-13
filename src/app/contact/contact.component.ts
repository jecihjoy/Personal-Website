import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name = '';
  email = '';
  subject = '';
  msg = '';

  constructor() { }

  onSubmit() {
    console.log('submitted');
  }

  onClear() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.msg = '';
  }

  ngOnInit() {
  }

}
