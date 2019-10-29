import { ActionReducerMap } from '@ngrx/store'
import { routerReducer, RouterReducerState } from '@ngrx/router-store'
import * as fromRouter from './router/router.reducer';
import * as fromTurkbot from './turkbot/turkbot.reducer'
import {TurkbotEffects} from "./turkbot/turkbot.effects";

export interface State {
  router: RouterReducerState<fromRouter.State>
  [fromTurkbot.turkbotFeatureKey]: fromTurkbot.State;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  [fromTurkbot.turkbotFeatureKey]: fromTurkbot.reducer,
}

export const effects = [
  TurkbotEffects
]
