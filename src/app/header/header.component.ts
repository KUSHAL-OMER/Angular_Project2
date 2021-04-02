import { Datause } from './../shared/datause';
import { LogsignService } from './../services/logsign.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data: Datause;

  constructor( public dialog: MatDialog, private logser: LogsignService ) {
  }

  ngOnInit(): void {
  }

  openLoginForm(): void {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

  openSignupForm(): void {
    this.dialog.open(SignupComponent, {width: '500px', height: '450px'});
  }

  show(): boolean {
    if (this.logser.s === true)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  // tslint:disable-next-line:ban-types
  datainfo(): String {
    return(this.logser.data.name);
  }

  closeLogin(): void {
    this.logser.s = true;
  }

}
