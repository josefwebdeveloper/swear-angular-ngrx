import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Task} from '../../models/task';
import * as moment from 'moment';
import {DataService} from '../../services/data.service';
import {MatInput} from '@angular/material/input';

// import {format} from 'path';

@Component({
  selector: 'app-test',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  minDate: Date = null;
  maxDate: Date = null;
  events: string[] = [];
  title = 'lorem';
  description = 'hjhkjh kjkljjkl kljljlkj ';
  @ViewChild('fromInputValue', {
    read: MatInput
  }) fromInputValue: MatInput;

  @ViewChild('toInputValue', {
    read: MatInput
  }) toInputValue: MatInput;
  panelOpenState = false;
  showSwearTime = true;

  constructor(private apiService: ApiService,
              private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    // console.log(new Date());
    // console.log(moment('2020-03-09T22:00:00.000Z').format('YYYY-MM-DD') === moment('2020-03-09T22:00:00.001Z').format('YYYY-MM-DD'));
    // console.log(moment('2020-03-09T22:00:00.000Z') === moment('2020-03-09T22:00:00.001Z'));
  }

  addEventMinDate(type: string, event: MatDatepickerInputEvent<Date>) {
    if (moment(event.value).format('YYYY-MM-DD') >= moment(new Date()).format('YYYY-MM-DD')) {
      this.minDate = event.value;
      console.log(event.value);
    } else {
      this.fromInputValue.value = '';
    }
    // this.events.push(`${type}: ${event.value}`);
  }

  addEventMaxDate(type: string, event: MatDatepickerInputEvent<Date>) {
    if (moment(event.value).format('YYYY-MM-DD') >= moment(new Date()).format('YYYY-MM-DD')
      && moment(event.value).format('YYYY-MM-DD') >= moment(this.minDate).format('YYYY-MM-DD')) {
      this.maxDate = event.value;
      console.log(event.value);
      if (this.minDate && this.maxDate) {
        const task: Task = {
          title: this.title,
          description: this.description,
          startDate: this.minDate,
          endDate: this.maxDate,
          sumCompany: 150
        };
        console.log('call');
        this.dataService.sendDate(task);
        this.apiService.postTask(task).subscribe(d => {
          console.log(d);
        });
        this.showSwearTime = false;
      }
    } else {
      this.toInputValue.value = '';
    }
    // this.events.push(`${type}: ${event.value}`);
  }

}
