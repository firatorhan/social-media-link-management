import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalVisibility = new Subject<boolean>();
  modalVisibility$ = this.modalVisibility.asObservable();

  show() {
    this.modalVisibility.next(true);
  }

  hide() {
    this.modalVisibility.next(false);
  }
}
