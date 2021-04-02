import { Component, OnInit, Inject } from '@angular/core';
import { LogsignService } from './../services/logsign.service';
import { Todo } from '../shared/todo';
import { WorkServiceService } from '../services/work-service.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})

export class WorkComponent implements OnInit {

todos: Todo[];

  constructor(private workservice: WorkServiceService, private route: ActivatedRoute, private logser: LogsignService) {
    this.workservice.getItems().subscribe(data => {
      this.todos = data;
    });
  }

  ngOnInit(): void {}

  show(): boolean {
    if (this.logser.s === true)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

}
