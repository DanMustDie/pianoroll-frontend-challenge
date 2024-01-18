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
        const prSvg = document.getElementById('svg-container')
        const svgFollower1 = document.getElementById('svg-follower-1')
        const svgFollower2 = document.getElementById('svg-follower-2')
        const chosenArea = document.getElementById('chosen-area')

        prSvg?.addEventListener('mouseenter',() => {
            svgFollower1!.style.display = 'unset';
        })
        
        prSvg?.addEventListener('mousemove',(event : any) => {
            this.mousePosition = Math.floor(event.clientX - prSvg.getBoundingClientRect().left + 2)
            if(firstFollowerFlag){
                svgFollower1!.style.transform = `translate(${this.mousePosition}px,0px)`
            }
        })

        prSvg?.addEventListener('click',() => {
            firstFollowerFlag = false;
            svgFollower2!.style.display = 'unset'
            svgFollower2!.style.transform = `translate(${this.mousePosition}px,0px)`
            chosenArea!.style.transform = svgFollower1!.style.transform
            let chosen_area_width
            prSvg?.addEventListener('mousemove',() => {
                if(secondFollowerFlag){
                    chosen_area_width = svgFollower1!.getBoundingClientRect().left - svgFollower2!.getBoundingClientRect().left
                    chosenArea!.style.width = `${Math.abs(chosen_area_width)}`
                    if(chosen_area_width > 0){
                        chosenArea!.style.transform = svgFollower2!.style.transform
                    }else{
                        chosenArea!.style.transform = svgFollower1!.style.transform
                    }
                    svgFollower2!.style.transform = `translate(${this.mousePosition}px,0px)`
                }
            })

            prSvg?.addEventListener('click',() => {
                secondFollowerFlag = false
            },{once:true})
        },{once:true})


    }
}
