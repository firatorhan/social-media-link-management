import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit{
  isVisible = false;
  private subscription: Subscription | undefined;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.subscription = this.modalService.modalVisibility$.subscribe(visible => {
      this.isVisible = visible;
    });
  }

  close() {
    this.modalService.hide();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
