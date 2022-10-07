import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <div>That's a custom component</div>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'The Web Page'
}