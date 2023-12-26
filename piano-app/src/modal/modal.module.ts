import { NgModule } from "@angular/core";

import { ModalComponent } from "./modal.component";
import { PRListModule } from "src/prlist/prlist.module";
import { PrsvgModule } from "src/prsvg/prsvg.module";
import { FollowerComponent } from "./follower.component";

@NgModule({
    declarations:[ModalComponent,FollowerComponent],
    imports:[PRListModule,PrsvgModule],
    providers:[],
    exports:[ModalComponent,FollowerComponent]
})

export class ModalModule {}