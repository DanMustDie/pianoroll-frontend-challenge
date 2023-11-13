import { NgModule } from "@angular/core";

import { PrsvgComponent } from "./prsvg.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[PrsvgComponent],
    imports:[CommonModule],
    providers:[],
    exports:[PrsvgComponent],
})

export class PrsvgModule{}