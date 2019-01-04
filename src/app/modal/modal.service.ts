import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { ModalDynamicComponent } from './modal-dynamic/modal-dynamic.component';
import { ModalRefService } from './modal-ref.service';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
) { }

open(component: any) {
    // 1. Create a component reference from the component 
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(ModalDynamicComponent)
      .create(this.injector);
      
    console.log(componentRef);
    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);
    
    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    
    // 4. Append DOM element to the body
    document.body.appendChild(domElem);
    componentRef.instance.mount(component);
    componentRef.instance.show();
    // 5. Wait some time and remove it from the component tree and from the DOM
    // setTimeout(() => {
    //     this.appRef.detachView(componentRef.hostView);
    //     componentRef.destroy();
    // }, 3000);
  }
}
