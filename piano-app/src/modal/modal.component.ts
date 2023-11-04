import {Component,Input, OnInit} from "@angular/core"
import { PianoRoll } from "src/pianoroll/pianoroll"

@Component({
    selector:'modal-window',
    templateUrl:'./modal.component.html',
    styleUrls:['./modal.component.css']
})

export class ModalComponent implements OnInit{
    @Input() pianoroll!: PianoRoll;
    ngOnInit(): void {
        const MDcontainer = document.getElementsByClassName('modal-container')[0]
        if(MDcontainer != null){
            MDcontainer.appendChild(this.pianoroll.svg)
        }
    }
}
