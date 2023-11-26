import { Component, Input, OnInit,inject } from '@angular/core';
import { PianoRoll } from 'src/pianoroll/pianoroll';
//@ts-ignore
import {PianoRollClass} from "../assets/pianoroll.js";
@Component({
  selector: 'app-prsvg',
  templateUrl: './prsvg.component.html',
  styleUrls: ['./prsvg.component.css']
})
export class PrsvgComponent implements OnInit{
 @Input() pianoroll! : PianoRoll ;
  ngOnInit(){
      const svgQuery = 'piano-roll-svg' + String(this.pianoroll.id);
      const svgDoc = document.createElementNS('http://www.w3.org/2000/svg','svg')
      const svg = document.getElementsByClassName('piano-roll-svg')[this.pianoroll.id];
      const roll = new PianoRollClass(svgDoc,this.pianoroll.notes)
      this.pianoroll.svg = svgDoc.outerHTML
      if(svg!=null){
        svg.appendChild(svgDoc)
      }
      //@ts-ignores
    console.log(document.getElementsByClassName('piano-roll-svg')['piano-roll-svg2'])
  }
}
