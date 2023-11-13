import { Component,SimpleChanges,inject,OnInit } from '@angular/core';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { PRListComponent } from 'src/prlist/prlist.component';
import { ModalService } from 'src/services/modal.service';
import { PianoRoll } from 'src/pianoroll/pianoroll';
import { ModalComponent } from 'src/modal/modal.component';
import { PrService } from 'src/services/pr.service';
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
  constructor(){
    this.modalService.getModalVisibility().subscribe((state) =>{
      this.visibilityStatus = state
    })
  }
  async ngOnInit(){
    await this.prService.loadPianoRollData();
  }
  closeModal(){
    this.modalService.hideModal();
  }
}
