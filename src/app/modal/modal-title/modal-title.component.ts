import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'modal-title',
  template: `
        <div class="modal-header">
            <ng-content></ng-content>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `
})
export class ModalTitleComponent implements OnInit {

  constructor(private element: ElementRef) {

  }

  ngOnInit(): void {
      const nativeElement: HTMLElement = this.element.nativeElement;
      (<any>nativeElement.firstChild).classList.add('modal-title');
  }

}
