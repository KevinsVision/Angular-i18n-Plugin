import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-i18n-plugin';

  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }

  receipt = {
      minutesToDeliver: 7,
      gender: 'male',
      quantity: 1000,
      purchaseDate: "01/01/2022",
      cityTax: .086,
      currency: 1529.22,
    }
    // 
  ;

}
