import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments'


@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.scss']
})
export class PagarComponent implements OnInit {

  constructor() {
    render(
      {
        id: "#myPaypalButtons",
        currency: "USD",
        value: "100.00",
        onApprove: (details) => {
          alert("Transaccion exitosa")
        }
      }
    )
  }
  ngOnInit(): void {
  }
}
