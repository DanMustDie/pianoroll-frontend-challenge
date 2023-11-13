import {Component,Input, inject,OnInit} from "@angular/core"
import { PianoRoll } from "src/pianoroll/pianoroll"
import { ModalService } from "src/services/modal.service";
//@ts-ignore
import {PianoRollClass} from "../assets/pianoroll.js";

@Component({
    selector:'modal-window',
    templateUrl:'./modal.component.html',
    styleUrls:['./modal.component.css']
})

export class ModalComponent implements OnInit{
    modalService = inject(ModalService)
    @Input() pianoroll: PianoRoll = this.modalService.getPR();
    ngOnInit(){
        const doc = document.getElementsByClassName('modal-svg-container')[0];
        doc.innerHTML = this.pianoroll.svg
    }
}
