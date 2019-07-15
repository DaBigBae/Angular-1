// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',
//   styleUrls: ['./modal.component.css']
// })
// export class ModalComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-config',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class NgbdModalConfig implements OnInit{
  @ViewChild('theModal', {static: false}) content: ElementRef;

  constructor( private modalService: NgbModal) {
  }

  ngOnInit(){}

  open(){
    this.modalService.open(this.content, { size: 'sm', backdrop: 'static' });
  }
}
