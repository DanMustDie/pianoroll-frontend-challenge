import { Component, OnInit,inject} from "@angular/core";
import { PrService } from "src/services/pr.service";
import { PianoRoll } from "src/pianoroll/pianoroll";

@Component({
    selector:'pr-list',
    templateUrl:'./prlist.component.html',
    styleUrls:['./prlist.component.css']
})

export class PRListComponent implements OnInit{
    data:object[] | null = null;
    pianorolls: PianoRoll[] = [];
    prService = inject(PrService);
    async ngOnInit():Promise<any>  {
        this.pianorolls = [];
        this.data = await this.prService.loadPianoRollData();
        console.log('On Init log')
        if(this.data != null){
            
            for (let it = 0; it < 20; it++) {
                let start = it * 60;
                let end = start + 60;
                let partData = this.data.slice(start, end);
                let pr:PianoRoll = { notes: partData,id:it}
                this.pianorolls.push(pr)
            }
            
            console.log(this.data)
            console.log(this.pianorolls)
        }else{
            console.log('Something went terribly wrong')
        }
    }
}