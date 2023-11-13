import { Injectable } from '@angular/core';
import { PianoRoll } from 'src/pianoroll/pianoroll';
@Injectable({
  providedIn: 'root'
})

export class PrService {
  data : object[] | null = null;
  pianorolls: PianoRoll[] = [];
  async loadPianoRollData(){
    //Request notes from pianoroll.ai
    try {
      const response = await fetch('https://pianoroll.ai/random_notes');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      this.data = await response.json();
    } catch (error) {
      console.error('Error loading data:', error);
      this.data = null;
    }

    //if data was received -> parse to interface 
    if(this.data != null){
      for (let it = 0; it < 20; it++) {
          let start = it * 60;
          let end = start + 60;
          let partData = this.data.slice(start, end);
          let pr:PianoRoll = { notes: partData,id:it}
          this.pianorolls.push(pr)
      }
    }
  }
}