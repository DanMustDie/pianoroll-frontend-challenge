import { Component,SimpleChanges,inject } from '@angular/core';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { PRListComponent } from 'src/prlist/prlist.component';
import { ModalService } from 'src/services/modal.service';
import { PianoRoll } from 'src/pianoroll/pianoroll';
import { ModalComponent } from 'src/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  modalService = inject(ModalService);
  visibilityStatus = false;
  title = 'piano-app';
  constructor(){
    this.modalService.getModalVisibility().subscribe((state) =>{
      this.visibilityStatus = state
    })
    console.log(this.modalService.getPR())
  }

  closeModal(){
    this.modalService.hideModal();
  }
}
