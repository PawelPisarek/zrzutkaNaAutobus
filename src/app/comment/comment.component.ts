import { Component, OnInit } from '@angular/core';
import {NgRedux} from "@angular-redux/store";
import {PROPERTY_BINDING} from "../shared/data.service";
import {AppState} from "../app-state";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  public myOfferProperty$;

  constructor(private ngRedux: NgRedux<AppState>) {
    this.myOfferProperty$ = (property, secondProperty, thirdProperty) => {
      return PROPERTY_BINDING(ngRedux, property, secondProperty, thirdProperty)
    };
  }

  getItemName(index, item) {
    return item.text;
  }
  setDataToStore(data){
    console.log(data);
  }


  ngOnInit(): void {
  }
}
