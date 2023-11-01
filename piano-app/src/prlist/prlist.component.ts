import { Component, OnInit } from "@angular/core";

@Component({
    selector:'prlist',
    templateUrl:'./prlist.component.html',
    styleUrls:['./prlist.component.css']
})

export class PRListComponent implements OnInit{
    ngOnInit(): void {
        console.log('On Init log')
    }
 }