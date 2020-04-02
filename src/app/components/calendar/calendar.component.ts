import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MatCalendarCellCssClasses} from '@angular/material/datepicker';
import {DataService} from '../../services/data.service';
import {Subscription} from 'rxjs';
import * as moment from 'moment';


// import { MatCalendar } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {

  constructor(private dataService: DataService,
              private cd: ChangeDetectorRef) {
  }

  subTask: Subscription;
  selectedDate: any;
  show = true;
  startDate: Date = null;
  endDate: Date = null;

  datesToHighlight = [];

  ngOnInit(): void {
    this.subTask = this.dataService.getDate().subscribe(d => {
      if (d) {
        // console.log(d);
        this.startDate = d.startDate;
        this.endDate = d.endDate;
        this.datesToHighlight.push(d.startDate, d.endDate);
        // console.log(this.datesToHighlight);
        this.dateClass();
        this.show = false;
        setTimeout(() => {
          this.show = true;
        });
      }
    });
  }

  onSelect(event) {
    console.log(event);
    console.log(moment(this.startDate).format('YYYY-MM-DD'));
    console.log(moment(this.endDate).format('YYYY-MM-DD'));
    if ((moment(event).format('YYYY-MM-DD') === moment(new Date()).format('YYYY-MM-DD'))
      && (moment(event).format('YYYY-MM-DD') >= moment(this.startDate).format('YYYY-MM-DD'))
      && (moment(event).format('YYYY-MM-DD') <= moment(this.endDate).format('YYYY-MM-DD'))
    ) {
      this.selectedDate = event;
    }
  }

  // dateClass() {
  //   console.log(this.datesToHighlight);
  //   return (date: Date): MatCalendarCellCssClasses => {
  //     const highlightDate = this.datesToHighlight
  //       .map(strDate => new Date(strDate))
  //       .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
  //
  //     return highlightDate ? 'special-date' : '';
  //   };
  // }
  dateClass2() {
    // console.log(this.datesToHighlight);
    console.log((date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesToHighlight
        .map(strDate => moment(strDate).format('YYYY-MM-DD'))
        .some(d => d === moment(date).format('YYYY-MM-DD'));

      return highlightDate ? 'special-date' : '';
    });
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesToHighlight
        .map(strDate => moment(strDate).format('YYYY-MM-DD'))
        .some(d => d === moment(date).format('YYYY-MM-DD'));

      return highlightDate ? 'special-date' : '';
    };
  }

  test() {
    this.datesToHighlight.push('2020-03-22T18:30:00.000Z', '2020-03-19T18:30:00.000Z');
    this.show = true;
  }

  dateClass() {
    // console.log(this.datesToHighlight);
    // console.log(date:Date);
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesToHighlight
        .map(strDate => {
          // console.log(moment(strDate).format('YYYY-MM-DD'), '1');
          // console.log(moment(date).format('YYYY-MM-DD'), '2');
          // console.log(moment(strDate).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD'), '3');
          return moment(strDate).format('YYYY-MM-DD');
        }).some(d => d === moment(date).format('YYYY-MM-DD'));
      // console.log({highlightDate}, '4');
      return highlightDate ? 'special-date' : '';
    };
  }

  ngOnDestroy() {
    this.subTask.unsubscribe();
  }

}
