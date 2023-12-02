import {Component,Input, inject,OnInit} from "@angular/core"
import { PianoRoll } from "src/pianoroll/pianoroll"
import { ModalService } from "src/services/modal.service";
import { PrService } from "src/services/pr.service";
//@ts-ignore
import {PianoRollClass} from "../assets/pianoroll.js";

@Component({
    selector:'modal-window',
    templateUrl:'./modal.component.html',
    styleUrls:['./modal.component.css']
})

export class ModalComponent implements OnInit{
    modalService = inject(ModalService)
    prService = inject(PrService)
    @Input() pianoroll: PianoRoll = this.modalService.getPR();
    prlistPianorolls = this.prService.excludeElementById(this.pianoroll.id)
    ngOnInit(){
        const doc = document.getElementsByClassName('modal-svg-container')[0];
        doc.innerHTML = this.pianoroll.svg
    }
}
