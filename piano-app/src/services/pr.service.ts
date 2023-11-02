import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PrService {
  data : object[] | null = null
  async loadPianoRollData(){
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
    return this.data;
  }
}