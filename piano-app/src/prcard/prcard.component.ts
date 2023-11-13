import { Component,Input, OnInit,inject } from "@angular/core";
import { PianoRoll } from "src/pianoroll/pianoroll";
import { CommonModule } from "@angular/common";
import { ModalService } from "src/services/modal.service";
//@ts-ignore
import {PianoRollClass} from "../assets/pianoroll.js";
@Component({
    selector:'pr-card',
    templateUrl:'./prcard.component.html',
    styleUrls:['./prcard.component.css']
})

export class PRCardComponent{
    modalService = inject(ModalService);
    svgParsed : any = null;
    cardDiv : Element | null = null;
    @Input() pianoroll!: PianoRoll;
    openModal(){
        this.modalService.setPR(this.pianoroll)
        this.modalService.showModal()
        console.log(this.pianoroll.id)
    }
}