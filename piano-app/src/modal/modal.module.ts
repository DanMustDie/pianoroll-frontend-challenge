import { NgModule } from "@angular/core";

import { ModalComponent } from "./modal.component";
import { PRListModule } from "src/prlist/prlist.module";
import { PrsvgModule } from "src/prsvg/prsvg.module";

@NgModule({
    declarations:[ModalComponent],
    imports:[PRListModule,PrsvgModule],
    providers:[],
    exports:[ModalComponent]
})

export class ModalModule {}