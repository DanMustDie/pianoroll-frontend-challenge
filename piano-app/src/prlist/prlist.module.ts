import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; 
import { CommonModule } from "@angular/common";
import { PRListComponent } from "./prlist.component";
import { PRCardModule } from "src/prcard/prcard.module";

@NgModule({
    declarations:[PRListComponent],
    imports:[PRCardModule,CommonModule],
    providers:[],
    exports:[PRListComponent]
})

export class PRListModule {}