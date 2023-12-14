import { Component,inject,Input} from "@angular/core";
import { PrService } from "src/services/pr.service";
import { PianoRoll } from "src/pianoroll/pianoroll";

@Component({
    selector:'pr-list',
    templateUrl:'./prlist.component.html',
    styleUrls:['./prlist.component.css']
})

export class PRListComponent{
    prService = inject(PrService);
    @Input() pianorolls: PianoRoll[] = this.prService.pianorolls;
}