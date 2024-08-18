import { Component } from '@angular/core';
import { SearchLinkComponent } from './search-link/search-link.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { ListLinkComponent } from './list-link/list-link.component';
import { ModalComponent } from '../shared/modal/modal.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../shared/services/data.service';
import { ModalService } from '../shared/services/modal.service';
import { ILinkItem } from './main.interface';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SearchLinkComponent,
    AddLinkComponent,
    ListLinkComponent,
    ModalComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  linkForm: FormGroup;
  receivedData: ILinkItem | undefined;
  id = -1;
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private modalService: ModalService
  ) {
    this.dataService.currentData.subscribe((data) => {
      return (this.id = data.length);
    });
    this.linkForm = this.fb.group({
      id: this.id,
      link: ['', [Validators.required, Validators.pattern('https?://.+')]],
      nameOfSocialMedia: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.linkForm.valid) {
      this.dataService.addLink(this.linkForm.value);
      this.linkForm.reset();
      this.modalService.hide();
    } else {
      console.log('Form geçerli değil.');
    }
  }
  hideModal() {
    this.modalService.hide();
  }

  editLink(data: ILinkItem) {
    this.receivedData = data;
    this.dataService.currentData.subscribe((data) => {
      let selectedItem = data.find((item) => item.id === this.receivedData?.id);
      this.linkForm.patchValue(selectedItem!);
      this.modalService.show();
    });
  }
}
