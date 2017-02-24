import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentComponent} from "./comment.component";
import {CommentFormModule} from "./form/comment-form.module";
import {CommentFormComponent} from "./form/comment-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommentService} from "./comment.service";

@NgModule({
  imports: [
    CommonModule,
    CommentFormModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers:[
    CommentService
  ],
  declarations: [CommentComponent,CommentFormComponent],
  exports:[CommentComponent,CommentFormComponent]
})
export class CommentModule { }
