import { LogsignService } from './../services/logsign.service';
import { Datause } from './../shared/datause';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {name: '', email: '', password: '', status: false};
  datause: Datause;

  constructor(public dialog: MatDialogRef<SignupComponent>, private signserve: LogsignService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.user.status === true)
    {
      this.datause = this.user;
      this.signserve.Buyerstorage(this.datause).subscribe(() => {
        alert('Signed-Up');
      });
    }
    else
    {
      this.datause = this.user;
      this.signserve.Userstorage(this.datause).subscribe(() => {
        alert('Signed-Up');
      });
    }
    this.dialog.close();
}
}
