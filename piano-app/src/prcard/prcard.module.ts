import { NgModule } from "@angular/core";

import { PRCardComponent } from "./prcard.component";
import { ModalModule } from "src/modal/modal.module";

@NgModule({
    declarations:[PRCardComponent],
    imports:[],
    providers:[],
    exports:[PRCardComponent]
})

export class PRCardModule {}