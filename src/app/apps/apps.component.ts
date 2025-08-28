import { Component } from '@angular/core';
import { LegalFooterComponent } from '../legal-footer/legal-footer.component';

@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [LegalFooterComponent],
  templateUrl: './apps.component.html',
  styleUrl: './apps.component.css'
})
export class AppsComponent {

}
