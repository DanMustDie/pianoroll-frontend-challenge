import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { NavbarModule} from './navbar/navbar.module';
import { PRListModule } from './prlist/prlist.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(NavbarModule).
catch(err => console.error(err))

platformBrowserDynamic().bootstrapModule(PRListModule).
catch(err => console.error(err))