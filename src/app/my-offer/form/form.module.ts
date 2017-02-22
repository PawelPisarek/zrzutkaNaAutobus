import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {FormComponent} from "./form.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: []
})
export class FormModule {
}
