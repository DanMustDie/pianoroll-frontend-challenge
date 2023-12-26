import {Component,Input, inject,ElementRef, ViewChild, AfterViewInit} from "@angular/core"
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

export class ModalComponent implements AfterViewInit{

    mousePosition :any;
    modalService = inject(ModalService)
    prService = inject(PrService)
    @Input() pianoroll: PianoRoll = this.modalService.getPR();
    prlistPianorolls = this.prService.excludeElementById(this.pianoroll.id)
    ngAfterViewInit(){
        const svg_container = document.getElementById('svg-container');

        if(svg_container != null){
            svg_container.appendChild(this.pianoroll.svg)
        }
        const pr_svg = document.getElementById('piano-roll-svg' + this.pianoroll.id)

        /*pr_svg?.addEventListener('mousemove',(event : any) => {
            this.mousePosition = Math.floor(event.clientX - pr_svg.getBoundingClientRect().left)
            svg_follower.x = `translate(${this.mousePosition}px,0px)`
        })*/
        /*
        console.log(pr_svg)
        console.log(svg_follower)
        if(pr_svg != null && svg_follower != null){
            const handleMouseMove = (event:any) => {
                this.mousePosition = Math.floor(event.clientX - pr_svg.getBoundingClientRect().left)
                svg_follower.style.transform = `translate(${this.mousePosition}px,0px)`
            }

            pr_svg.addEventListener('mousemove',handleMouseMove)
            pr_svg.addEventListener('click',(event:any) => {
                this.mousePosition = Math.floor(event.clientX - pr_svg.getBoundingClientRect().left)
                svg_follower.style.transform = `translate(${this.mousePosition}px,0px)`
                pr_svg.removeEventListener('mousemove',handleMouseMove)
            },{once:true})
        }*/
        //Some notes on what to do
        //Transform all of the code of the 'follower' element as a seperate angular element for easier logic 
        //Create a rectangle between those two elements to highlight the chosen segment 
    }
}
