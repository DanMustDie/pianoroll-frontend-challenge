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

export class PRCardComponent implements OnInit{
    modalService = inject(ModalService)
    @Input() pianoroll!: PianoRoll;
    ngOnInit(): void {
        const cardDiv = document.getElementsByClassName(`piano-roll-card`)[this.pianoroll.id];
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add('piano-roll-svg');
        svg.setAttribute('width', '80%');
        svg.setAttribute('height', '150');
        const roll = new PianoRollClass(svg,this.pianoroll.notes)
        this.pianoroll.svg = svg;
        if(cardDiv != null){
            cardDiv.appendChild(svg);
        }
    }
    openModal(){
        this.modalService.setPR(this.pianoroll)
        this.modalService.showModal()
        console.log(this.pianoroll)
        console.log(this.modalService.getModalVisibility())
    }
}