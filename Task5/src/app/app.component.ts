import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task4';

  test: string = '';

  show: boolean = false;
  getData(e: any) {
    this.test = e;
  }

}
