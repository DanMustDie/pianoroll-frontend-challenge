import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn:'root'})

export class ModalService {
    private modalVisibility  = new BehaviorSubject<boolean>(false)

    showModal() {
        this.modalVisibility.next(true);
      }
    
    hideModal() {
        this.modalVisibility.next(false);
    }
    
    getModalVisibility() {
        return this.modalVisibility.asObservable();
    }
}