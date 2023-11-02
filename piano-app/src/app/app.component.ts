import { Component } from '@angular/core';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { PRListComponent } from 'src/prlist/prlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano-app';
}
