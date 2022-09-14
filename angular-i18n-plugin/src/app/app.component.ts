import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Receipt';

  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }

  header: string = $localize`Ticket Confirmation`;

  receipt = {
      minutesUpdated: 1,
      miles: 10000,
      purchaseDate: "01/01/2023",
      cityTax: .086,
      currency: 1529.22,
    };

    localesList = [
      { code: 'en-US', label: 'English' },
      { code: 'es-US', label: 'Spanish' },
      { code: 'fr-CA', label: 'French' },
      { code: 'pt-BR', label: 'Portuguese' }
    ]

}
