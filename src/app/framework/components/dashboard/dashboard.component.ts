import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {select, Store} from "@ngrx/store";
import {State} from "../../../presentation";
import {LoadTurkbots} from "../../../presentation/turkbot/turkbot.actions";
import {getNumberOfTurkbots} from "../../../presentation/turkbot/turkbot.selectors";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  numberOfTurkbots$: Observable<number>

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadTurkbots())
    this.numberOfTurkbots$ = this.store.pipe(select(getNumberOfTurkbots))
  }
}
