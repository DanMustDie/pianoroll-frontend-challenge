import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; 

import { PRListComponent } from "./prlist.component";

@NgModule({
    declarations:[PRListComponent],
    imports:[BrowserModule],
    providers:[],
    bootstrap:[PRListComponent]
})

export class PRListModule {}