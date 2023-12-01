import { Component, OnInit,inject} from "@angular/core";
import { PrService } from "src/services/pr.service";
import { PianoRoll } from "src/pianoroll/pianoroll";

@Component({
    selector:'pr-list',
    templateUrl:'./prlist.component.html',
    styleUrls:['./prlist.component.css']
})

export class PRListComponent implements OnInit{
    prService = inject(PrService);
    pianorolls: PianoRoll[] = this.prService.excludeElementById(1);
    ngOnInit(): void{
        console.log('list loaded')
    }
}