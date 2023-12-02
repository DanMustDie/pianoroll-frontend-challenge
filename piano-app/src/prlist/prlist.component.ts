import { Component, OnInit,inject,Input} from "@angular/core";
import { PrService } from "src/services/pr.service";
import { PianoRoll } from "src/pianoroll/pianoroll";

@Component({
    selector:'pr-list',
    templateUrl:'./prlist.component.html',
    styleUrls:['./prlist.component.css']
})

export class PRListComponent implements OnInit{
    prService = inject(PrService);
    @Input() pianorolls: PianoRoll[] = this.prService.pianorolls;
    ngOnInit(): void{
        console.log('list loaded')
    }
}