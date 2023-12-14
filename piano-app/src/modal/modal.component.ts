import {Component,Input, inject,OnInit,HostListener} from "@angular/core"
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
    doc : any;
    mousePosition :any;
    modalService = inject(ModalService)
    prService = inject(PrService)
    @Input() pianoroll: PianoRoll = this.modalService.getPR();
    prlistPianorolls = this.prService.excludeElementById(this.pianoroll.id)
    ngOnInit(){
        this.doc = document.getElementsByClassName('modal-svg-container')[0];
        this.doc.outerHTML = this.pianoroll.svg
        this.doc = document.getElementById('piano-roll-svg' + this.pianoroll.id)
        this.doc.addEventListener('mousemove',(event:any) => {
            this.mousePosition = `(X:${Math.floor(event.clientX - this.doc.getBoundingClientRect().left)})`
        })
    }
}
