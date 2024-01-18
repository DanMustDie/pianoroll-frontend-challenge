import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PianoRoll } from "src/pianoroll/pianoroll";

@Injectable({providedIn:'root'})

export class ModalService {

    private modalVisibility  = new BehaviorSubject<boolean>(false)
    prStorage : PianoRoll | any = null;
    showModal() {
        this.modalVisibility.next(true);
    }
    
    hideModal() {
        this.modalVisibility.next(false);
    }
    
    getModalVisibility() {
        return this.modalVisibility.asObservable();
    }

    getPR(){
        return this.prStorage;
    }
    setPR(pr:PianoRoll){
        this.prStorage = JSON.parse(JSON.stringify(pr)) as PianoRoll;
    }
}