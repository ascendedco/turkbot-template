import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs/internal/observable/of'

import { TurkbotNetwork } from '../../domain/gateways/network/turkbot.network'
import {
  CreateTurkbot,
  CreateTurkbots, DeleteTurkbot, DeleteTurkbots,
  LoadTurkbots, RemoveTurkbot, RemoveTurkbots,
  UpdateTurkbot, UpdateTurkbots,
  UpsertTurkbot,
  UpsertTurkbots,
  TurkbotActionTypes,
} from './turkbot.actions'
import { Turkbot } from '../../entity/turkbot.entity'

@Injectable()
export class TurkbotEffects {

  constructor(private actions$: Actions, private network: TurkbotNetwork) {}

  @Effect()
  loadTurkbots$ = this.actions$.pipe(
    ofType(TurkbotActionTypes.LoadTurkbots),
    switchMap((action: LoadTurkbots) => this.network.readList().pipe(
      map((turkbots: Turkbot[]) => new UpsertTurkbots({ turkbots: turkbots })),
      catchError(error => {
        return of({
          type: '[Error] Load Turkbots',
          payload: error
        })
      })
    ))
  )

  @Effect()
  createTurkbot$ = this.actions$.pipe(
    ofType(TurkbotActionTypes.CreateTurkbot),
    switchMap((action: CreateTurkbot) => this.network.create(action.payload.turkbot).pipe(
      map((turkbot: Turkbot) => new UpsertTurkbot({ turkbot: turkbot })),
      catchError(error => {
        return of({
          type: '[Error] Create Turkbot',
          payload: error
        })
      })
    ))
  )

  @Effect()
  createTurkbots$ = this.actions$.pipe(
    ofType(TurkbotActionTypes.CreateTurkbots),
    switchMap((action: CreateTurkbots) => this.network.createList(action.payload.turkbots).pipe(
      map((turkbots: Turkbot[]) => new UpsertTurkbots({ turkbots: turkbots })),
      catchError(error => {
        return of({
          type: '[Error] Create Turkbots',
          payload: error
        })
      })
    ))
  )

  @Effect()
  updateTurkbot$ = this.actions$.pipe(
    ofType(TurkbotActionTypes.UpdateTurkbot),
    switchMap((action: UpdateTurkbot) => this.network.update(action.payload.turkbot).pipe(
      map((turkbot: Turkbot) => new UpsertTurkbot({ turkbot: turkbot })),
      catchError(error => {
        return of({
          type: '[Error] Update Turkbot',
          payload: error
        })
      })
    ))
  )

  @Effect()
  updateTurkbots$ = this.actions$.pipe(
    ofType(TurkbotActionTypes.UpdateTurkbots),
    switchMap((action: UpdateTurkbots) => this.network.updateList(action.payload.turkbots).pipe(
      map((turkbots: Turkbot[]) => new UpsertTurkbots({ turkbots: turkbots })),
      catchError(error => {
        return of({
          type: '[Error] Update Turkbots',
          payload: error
        })
      })
    ))
  )

  @Effect()
  deleteTurkbot$ = this.actions$.pipe(
    ofType(TurkbotActionTypes.DeleteTurkbot),
    switchMap((action: DeleteTurkbot) => this.network.delete(action.payload.turkbot).pipe(
      map((turkbot: Turkbot) => new RemoveTurkbot({ id: turkbot.id })),
      catchError(error => {
        return of({
          type: '[Error] Delete Turkbot',
          payload: error
        })
      })
    ))
  )

  @Effect()
  deleteTurkbots$ = this.actions$.pipe(
    ofType(TurkbotActionTypes.DeleteTurkbots),
    switchMap((action: DeleteTurkbots) => this.network.deleteList(action.payload.turkbots).pipe(
      map((turkbots: Turkbot[]) => new RemoveTurkbots({ ids: turkbots.map(turkbot => turkbot.id) })),
      catchError(error => {
        return of({
          type: '[Error] Delete Turkbots',
          payload: error
        })
      })
    ))
  )
}
