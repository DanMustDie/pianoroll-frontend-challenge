import { Component, ElementRef, Input, OnInit,Renderer2} from '@angular/core';
import { PianoRoll } from 'src/pianoroll/pianoroll';
//@ts-ignore
import {PianoRollClass} from "../assets/pianoroll.js";
@Component({
  selector: 'app-prsvg',
  template: ''
})
export class PrsvgComponent implements OnInit{
  constructor(private elem: ElementRef,private renderer: Renderer2){}
 @Input() pianoroll! : PianoRoll ;

  ngOnInit(){
    //Get native element reference
      const natElement = this.elem.nativeElement;
      
    //Setup svg element 
      const svgDoc = document.createElementNS('http://www.w3.org/2000/svg','svg')
      svgDoc.setAttribute('width','80%')
      svgDoc.setAttribute('height','150')
      svgDoc.setAttribute('id','piano-roll-svg' + this.pianoroll.id)
      svgDoc.setAttribute('style','border: 2px solid #381815')
    //Create svg with a class 
      const roll = new PianoRollClass(svgDoc,this.pianoroll.notes)
    
    //Render out the element with the renderer
      this.pianoroll.svg = svgDoc.outerHTML
      this.renderer.appendChild(this.elem.nativeElement,svgDoc)
  }
}
