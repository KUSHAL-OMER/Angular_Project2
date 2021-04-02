import { Component, OnInit } from '@angular/core';
import { Datause } from './../shared/datause';
import { LogsignService } from './../services/logsign.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  itemsb: Datause[];
  itemss: Datause[];
  i: number;

  user = { email: '', password: '', status: false};
  datause: Datause;

  constructor(public dialog: MatDialogRef<LoginComponent>, private logserve: LogsignService) {
    this.logserve.getBuyerdata().subscribe(tod => {
      this.itemsb = tod;
    });
    this.logserve.getUserdata().subscribe(tod => {
      this.itemss = tod;
    });
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    if (this.user.status === true)
    {
      for ( this.i = 0; this.i < this.itemsb.length ; this.i++)
      {
        if (this.itemsb[this.i].email === this.user.email) {
          if (this.itemsb[this.i].password === this.user.password) {
            this.logserve.data = this.itemsb[this.i];
            this.logserve.s = false;
            break;
          }
      }
    }
      if (this.i === this.itemsb.length) {
      alert('Wrong Id or password');
    }
}
else
{
  for ( this.i = 0; this.i < this.itemss.length ; this.i++)
      {
        if (this.itemss[this.i].email === this.user.email) {
          if (this.itemss[this.i].password === this.user.password) {
            this.logserve.data = this.itemss[this.i];
            this.logserve.s = false;
            break;
          }
      }
    }
  if (this.i === this.itemss.length) {
      alert('Wrong Id or password');
    }
}
    this.dialog.close();
}
}
