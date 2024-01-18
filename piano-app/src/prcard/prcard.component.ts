import { Component,ElementRef,Input, OnInit,Renderer2,inject } from "@angular/core";
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
    constructor(private el : ElementRef, private renderer2 : Renderer2){
        this.modalService.getModalVisibility().subscribe(state => {
            this.modalState = state
        })
    }
    modalService = inject(ModalService);
    modalState : boolean = false;
    @Input() pianoroll!: PianoRoll;
    openModal(){
        this.modalService.prStorage = this.pianoroll
        this.modalService.showModal()
        console.log(document.getElementById('piano-roll-svg'))
    }
}