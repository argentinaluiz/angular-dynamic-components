import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'modal-body',
  template: '<ng-content></ng-content>',
})
export class ModalBodyComponent implements OnInit {

  constructor(private element: ElementRef) {

  }

  ngOnInit(): void {
      const nativeElement: HTMLElement = this.element.nativeElement;
      (<any>nativeElement.firstChild).classList.add('modal-body');
  }

}
