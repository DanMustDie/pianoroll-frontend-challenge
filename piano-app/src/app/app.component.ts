import { Component,SimpleChanges,inject,OnInit } from '@angular/core';
import { ModalService } from 'src/services/modal.service';
import { PrService } from 'src/services/pr.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  modalService = inject(ModalService);
  prService = inject(PrService);
  visibilityStatus = false;
  title = 'piano-app';
  dataLoaded = false;
  constructor(){
    this.modalService.getModalVisibility().subscribe((state) =>{
      this.visibilityStatus = state
    })
  }
  async ngOnInit(){
    this.dataLoaded = await this.prService.loadPianoRollData();
  }
  closeModal(){
    this.modalService.hideModal();
  }
}
