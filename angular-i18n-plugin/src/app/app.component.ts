import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Receipt';
  counter = 1;
  header: string = $localize`Ticket Confirmation`;

  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }

  public changeCounter(change:number)
    {
      this.counter = Math.max(0, this.counter+change);
    }

  receipt = {
      miles: 10000,
      purchaseDate: "01/01/2023",
      cityTax: .086,
      currency: 1529.22,
    };

    localesList = [
      { code: 'en-US', label: 'English' },
      { code: 'es-MX', label: 'Spanish' },
      { code: 'fr-CA', label: 'French' },
      { code: 'pt-BR', label: 'Portuguese' }
    ]

}
