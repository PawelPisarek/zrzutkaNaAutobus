import { Component, OnInit } from '@angular/core';
import {MyOfferService} from "./my-offer.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-my-offer',
  templateUrl: './my-offer.component.html',
  styleUrls: ['./my-offer.component.css']
})
export class MyOfferComponent implements OnInit {

  constructor(private usersService: MyOfferService, private route: ActivatedRoute) {}

  myOffer;
  ngOnInit(): void {
    this.myOffer = this.route.snapshot.data['MyOffer'];
    console.log(this.myOffer);
  }
}
