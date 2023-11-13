import { NgModule } from "@angular/core";

import { PRCardComponent } from "./prcard.component";
import { PrsvgModule } from "src/prsvg/prsvg.module";
@NgModule({
    declarations:[PRCardComponent],
    imports:[PrsvgModule],
    providers:[],
    exports:[PRCardComponent]
})

export class PRCardModule {}