import { Component, OnInit, Directive, ViewChild, ComponentFactoryResolver, ElementRef, ViewContainerRef, Injector } from '@angular/core';
import { ModalRefService } from '../modal-ref.service';

declare const $;

@Directive({
    selector: '[modalContent]'
  })
  export class ModalContentDirective {
  
    constructor(public viewContainerRef: ViewContainerRef) { }
  
  }

@Component({
  selector: 'app-modal-dynamic',
  template: `
      <div class="modal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <ng-template modalContent></ng-template>
              </div>
          </div>
      </div>
  `,
  styleUrls: ['./modal-dynamic.component.scss']
})
export class ModalDynamicComponent{
  //component: Type<any>;
  @ViewChild(ModalContentDirective) modalContent: ModalContentDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
  private element: ElementRef, private injector: Injector) {
  }

  mount(component){
  let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
  
  const modalRef = new ModalRefService();
  modalRef.instance = this;
  const injector = Injector.create({
    providers: [
      { provide: ModalRefService, useValue: modalRef}
    ],
    parent: this.injector
  });
  //componentFactory.create(injector);
      let viewContainerRef = this.modalContent.viewContainerRef;
      viewContainerRef.createComponent(componentFactory, null,injector);
  }

  show() {
      $(this.divModal).modal('show');
  }

  close() {
    $(this.divModal).modal('hide');
}

  private get divModal(): HTMLElement {
      const nativeElement: HTMLElement = this.element.nativeElement; //modal
      return nativeElement.firstChild as HTMLElement;
  }
}
