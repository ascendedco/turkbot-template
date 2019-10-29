import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'

import { Turkbot } from '../../../../entity/turkbot.entity'
import { getAllTurkbots, getTurkbotsLoading } from '../../../../presentation/turkbot/turkbot.selectors'
import { DeleteTurkbot } from '../../../../presentation/turkbot/turkbot.actions'
import { State } from '../../../../presentation'

@Component({
  selector: 'turkbot-view',
  templateUrl: './turkbot-view.component.html',
  styleUrls: ['./turkbot-view.component.scss'],
})
export class TurkbotViewComponent implements OnInit {

  /* TODO: Add / configure required table fields */
  displayedColumns: string[] = ['name','url','description', 'actions']
  loading$: Observable<boolean>
  turkbot$: Observable<Turkbot[]>

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.loading$ = this.store.pipe(select(getTurkbotsLoading))
    this.turkbot$ = this.store.pipe(select(getAllTurkbots))
  }

  delete(turkbot: Turkbot) {
    // Todo: show modal that prompts for delete
    this.store.dispatch(new DeleteTurkbot({ turkbot: turkbot }))
  }
}
