import { Component } from '@angular/core';
import { TestModalComponent } from './test-modal/test-modal.component';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private modalService: ModalService){

  }

  ngOnInit(){
    this.modalService.open(TestModalComponent);
  }
}
