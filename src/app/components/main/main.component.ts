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
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      urlLink: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Data:', this.myForm.value);
      // Geçerli verileri işleyin, örneğin bir API'ye gönderebilirsiniz.
    } else {
      console.log('Form geçerli değil.');
    }
  }
}
