import { Component } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';
import { ModalComponent } from "../../shared/modal/modal.component";

@Component({
  selector: 'app-add-link',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './add-link.component.html',
  styleUrl: './add-link.component.scss'
})
export class AddLinkComponent {
  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.show();
  }

}
