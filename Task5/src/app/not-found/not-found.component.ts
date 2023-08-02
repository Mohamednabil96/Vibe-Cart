import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }
  backToHome() {
    this.router.navigate(['/']);
  }
}
