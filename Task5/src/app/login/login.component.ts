import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('usernameInput') usernameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
    this.usernameInput.nativeElement.addEventListener('input', this.handleInput.bind(this));
    this.passwordInput.nativeElement.addEventListener('input', this.handleInput.bind(this));
  }

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const field = input.closest('.form-group');
    if (input.value) {
      field?.classList.add('field--not-empty');
    } else {
      field?.classList.remove('field--not-empty');
    }
  }

}