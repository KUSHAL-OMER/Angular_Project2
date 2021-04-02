import { Component, OnInit } from '@angular/core';
import { LogsignService } from './../../services/logsign.service';
import { Todo } from './../../shared/todo';
import { WorkServiceService } from './../../services/work-service.service';
import { Content } from './../../shared/content';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css']
})
export class PoemsComponent implements OnInit {
  items: Todo[];
  cont: Content[];
  td: Todo;
  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods : [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMarchentId'
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '1234567890123',
      merchantName: 'DemoMerchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US'
    }
  };

  appenForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    matter: new FormControl(''),
    maincon: new FormControl('')
  });

  constructor( private workservice: WorkServiceService, private logser: LogsignService ) {
    this.workservice.getItems().subscribe(tod => {
      this.items = tod;
      this.cont = this.items[1].contents;
      this.td = this.items[1];
    });
  }

  get title() {
    return this.appenForm.get('title');
  }

  get author() {
    return this.appenForm.get('author');
  }

  get matter() {
    return this.appenForm.get('matter');
  }

  get maincon() {
    return this.appenForm.get('maincon');
  }

  ngOnInit(): void {
  }

  onSubmit(fd: FormGroupDirective): void {
    this.td.contents.push(this.appenForm.value);
    this.workservice.putpoemItem(this.td).subscribe(td => {
      this.td = td;
      console.log(this.td + "has been sent");
    });
    fd.resetForm();
    this.appenForm.reset();
  }
  onLoadPaymentData(event: CustomEvent<google.payments.api.PaymentData>): void {
    alert(event.detail);
  }

  enableDisable(): boolean {
    if (this.logser.data.status === true)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

}
