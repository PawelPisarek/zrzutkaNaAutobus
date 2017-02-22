import {Component, OnInit} from "@angular/core";
import {NgRedux} from "@angular-redux/store";
import {MyOfferState, AppState} from "../app-state";
import {Observable} from "rxjs";
@Component({
  selector: 'app-my-offer',
  templateUrl: './my-offer.component.html',
  styleUrls: ['./my-offer.component.css']
})
export class MyOfferComponent implements OnInit {

  public myOffer$;

  constructor(private ngRedux: NgRedux<AppState>) {
    this.myOffer$ = ngRedux.select('myOffer')
      .flatMap((data: MyOfferState) => {
      return new Observable(observer => {
        observer.next(data && data.list);
      });
    })
  }

  getItemName(index, item) {
    return item.price;
  }
  ngOnInit(): void {
  }
}
