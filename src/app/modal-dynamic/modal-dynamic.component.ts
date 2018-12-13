import {Component, ComponentFactoryResolver, Directive, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Type} from '@angular/core';
import {ModalTitleDirective} from './modal-title.directive';

@Directive({
    selector: '[modalTitle]'
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
export class ModalDynamicComponent implements OnInit {
    component: Type<any>;
    @ViewChild(ModalContentDirective) modalContent: ModalContentDirective;
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TestModal);

        let viewContainerRef = this.modalContent.viewContainerRef;
        let componentRef = viewContainerRef.createComponent(componentFactory);

        console.log(componentRef);
    }

}

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
export class ModalTitleComponent implements OnInit{

    constructor(private element: ElementRef) {

    }

    ngOnInit(): void {
        const nativeElement: HTMLElement = this.element.nativeElement;
        nativeElement.querySelector('[modal-title]').classList.add('modal-title');
    }

}

@Component({
    selector: 'modal-body',
    template: `
       <ng-content></ng-content>
    `
})
export class ModalBodyComponent implements OnInit{

    constructor(private element: ElementRef) {

    }

    ngOnInit(): void {
        const nativeElement: HTMLElement = this.element.nativeElement;
        nativeElement.querySelector('[modal-body]').classList.add('modal-body');
    }

}



@Component({
    selector: 'test-modal',
    template: `
        <modal-title>
            teste
        </modal-title>
        <modal-body>
            body
        </modal-body>
    `
})
export class TestModal {

}