import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { ModalRefService } from '../modal/modal-ref.service';

@Component({
  selector: 'app-test-modal',
  template: `
        <modal-title>
            <h5>Novo empregado</h5>
        </modal-title>
        <modal-body>
            <div>
                conteudo do body
            </div>
        </modal-body>
  `,
  styleUrls: ['./test-modal.component.scss']
})
export class TestModalComponent implements OnInit {

  constructor(private modalRef: ModalRefService) { }

  ngOnInit() {
    console.log(this.modalRef);
    setTimeout(() => {
      this.modalRef.close()
    },5000)
  }

}
