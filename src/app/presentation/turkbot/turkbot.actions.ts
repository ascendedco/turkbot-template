import { Action } from '@ngrx/store'
import { Turkbot } from '../../entity/turkbot.entity'

export enum TurkbotActionTypes {
  // Synchronous Actions: Handled by Reducers
  UpsertTurkbot = '[Turkbot] Upsert Turkbot',
  UpsertTurkbots = '[Turkbot] Upsert Turkbots',
  RemoveTurkbot = '[Turkbot] Remove Turkbot',
  RemoveTurkbots = '[Turkbot] Remove Turkbots',
  ClearTurkbots = '[Turkbot] Clear Turkbots',
  // Asynchronous Actions: Handled by Effects
  LoadTurkbots = '[Turkbot] Load Turkbots',
  CreateTurkbot = '[Turkbot] Create Turkbot',
  CreateTurkbots = '[Turkbot] Create Turkbots',
  UpdateTurkbot = '[Turkbot] Update Turkbot',
  UpdateTurkbots = '[Turkbot] Update Turkbots',
  DeleteTurkbot = '[Turkbot] Delete Turkbot',
  DeleteTurkbots = '[Turkbot] Delete Turkbots'
}

// Synchronous Actions: Handled by Reducers
export class UpsertTurkbot implements Action {
  readonly type = TurkbotActionTypes.UpsertTurkbot
  constructor(public payload: { turkbot: Turkbot }) { }
}

export class UpsertTurkbots implements Action {
  readonly type = TurkbotActionTypes.UpsertTurkbots
  constructor(public payload: { turkbots: Turkbot[] }) { }
}

export class RemoveTurkbot implements Action {
  readonly type = TurkbotActionTypes.RemoveTurkbot
  constructor(public payload: { id: string }) { }
}

export class RemoveTurkbots implements Action {
  readonly type = TurkbotActionTypes.RemoveTurkbots
  constructor(public payload: { ids: string[] }) { }
}

export class ClearTurkbots implements Action {
  readonly type = TurkbotActionTypes.ClearTurkbots
}

// Asynchronous Actions: Handled by Effects
export class LoadTurkbots implements Action {
  readonly type = TurkbotActionTypes.LoadTurkbots
}

export class CreateTurkbot implements Action {
  readonly type = TurkbotActionTypes.CreateTurkbot
  constructor(public payload: { turkbot: Turkbot }) { }
}

export class CreateTurkbots implements Action {
  readonly type = TurkbotActionTypes.CreateTurkbots
  constructor(public payload: { turkbots: Turkbot[] }) { }
}

export class UpdateTurkbot implements Action {
  readonly type = TurkbotActionTypes.UpdateTurkbot
  constructor(public payload: { turkbot: Turkbot }) { }
}

export class UpdateTurkbots implements Action {
  readonly type = TurkbotActionTypes.UpdateTurkbots
  constructor(public payload: { turkbots: Turkbot[] }) { }
}

export class DeleteTurkbot implements Action {
  readonly type = TurkbotActionTypes.DeleteTurkbot
  constructor(public payload: { turkbot: Turkbot }) { }
}

export class DeleteTurkbots implements Action {
  readonly type = TurkbotActionTypes.DeleteTurkbots
  constructor(public payload: { turkbots: Turkbot[] }) { }
}

export type TurkbotActions =
  UpsertTurkbot
  | UpsertTurkbots
  | RemoveTurkbot
  | RemoveTurkbots
  | ClearTurkbots
  | LoadTurkbots
  | CreateTurkbot
  | CreateTurkbots
  | UpdateTurkbot
  | UpdateTurkbots
  | DeleteTurkbot
  | DeleteTurkbots
