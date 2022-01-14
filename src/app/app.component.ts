import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="container">
    <menu [title]="title"></menu>
    <router-outlet></router-outlet>
  </div>`,
  styles: [
    `
      .container {
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        padding: 0 20px;
        box-sizing: border-box;
      }
      menu {
        padding: 0;
      }
    `,
  ],
})
export class AppComponent {
  title = 'jour4-tp';
}
