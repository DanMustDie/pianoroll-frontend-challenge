import {Component, inject,AfterViewInit} from "@angular/core"
import { PianoRoll } from "src/pianoroll/pianoroll"
import { ModalService } from "src/services/modal.service";
import { PrService } from "src/services/pr.service";
//@ts-ignore
import {PianoRollClass} from "../assets/pianoroll.js";
import { first } from "rxjs";

@Component({
    selector:'modal-window',
    templateUrl:'./modal.component.html',
    styleUrls:['./modal.component.css']
})

export class ModalComponent implements AfterViewInit{

    mousePosition :any;
    modalService = inject(ModalService)
    prService = inject(PrService)
    pianoroll: PianoRoll = this.modalService.getPR();
    prlistPianorolls = this.prService.excludeElementById(this.pianoroll.id)
    ngAfterViewInit(){
        let firstFollowerFlag = true;
        let secondFollowerFlag = true;
        const svgContainer = document.getElementById('svg-container');
        
        if(svgContainer != null){
            svgContainer.appendChild(this.pianoroll.svg)
        }
        const prSvg = document.getElementById('piano-roll-svg'+ this.pianoroll.id)
        prSvg!.style.width = svgContainer!.clientWidth+'px'
        const svgFollower1 = document.getElementById('svg-follower-1')
        const svgFollower2 = document.getElementById('svg-follower-2')
        const chosenArea = document.getElementById('chosen-area')

        svgContainer?.addEventListener('mouseenter',() => {
            svgFollower1!.style.display = 'unset';
        })
        
        svgContainer?.addEventListener('mousemove',(event : any) => {
            this.mousePosition = Math.floor(event.clientX - svgContainer.getBoundingClientRect().left + 2)
            if(firstFollowerFlag){
                if(this.mousePosition <= svgContainer!.clientWidth){
                    svgFollower1!.style.transform = `translate(${this.mousePosition}px,0px)`
                }            
            }
        })

        svgContainer?.addEventListener('click',() => {
            firstFollowerFlag = false;
            svgFollower2!.style.display = 'unset'
            svgFollower2!.style.transform = `translate(${this.mousePosition}px,0px)`
            chosenArea!.style.transform = svgFollower1!.style.transform
            let chosen_area_width
            svgContainer?.addEventListener('mousemove',() => {
                if(secondFollowerFlag){
                    chosen_area_width = svgFollower1!.getBoundingClientRect().left - svgFollower2!.getBoundingClientRect().left
                    chosenArea!.style.width = `${Math.abs(chosen_area_width)}`
                    if(chosen_area_width > 0){
                        chosenArea!.style.transform = svgFollower2!.style.transform
                    }else{
                        chosenArea!.style.transform = svgFollower1!.style.transform
                    }
                    if(this.mousePosition <= svgContainer!.clientWidth && this.mousePosition >=0 ){
                        svgFollower2!.style.transform = `translate(${this.mousePosition}px,0px)`
                    }
                    
                }
            })

            svgContainer?.addEventListener('click',() => {
                secondFollowerFlag = false
            },{once:true})
        },{once:true})


    }
}
