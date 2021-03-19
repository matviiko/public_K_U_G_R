import { Component } from '@angular/core';

@Component({
  selector: 'main-layout',
  template: `<header></header>
    <div class="d-flex flex-wrap main-layout">
      <router-outlet></router-outlet>
    </div>
    <div class="footer">
      <footer></footer>
    </div>`,
})
export class MainLayoutComponent {
  constructor() {}
}
