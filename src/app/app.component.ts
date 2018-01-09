import { Component } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backToTop(): void {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  }
}
