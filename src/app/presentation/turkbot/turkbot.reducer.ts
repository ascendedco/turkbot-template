import { CollectionState, initialCollectionState } from '@ascendedco/architecture'
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity'
import { TurkbotActions, TurkbotActionTypes } from './turkbot.actions'
import { Turkbot } from '../../entity/turkbot.entity'

export const turkbotFeatureKey = 'turkbot'

export interface State extends CollectionState<Turkbot> {
  // add additional state properties if necessary
}

export const adapter: EntityAdapter<Turkbot> = createEntityAdapter<Turkbot>()

export const initialState: State = adapter.getInitialState({
  // add additional initial state properties if necessary
  ...initialCollectionState,
})

export function reducer(
  state = initialState,
  action: TurkbotActions,
): State {
  switch (action.type) {

    case TurkbotActionTypes.CreateTurkbot:
    case TurkbotActionTypes.CreateTurkbots:
    case TurkbotActionTypes.UpdateTurkbot:
    case TurkbotActionTypes.UpdateTurkbots:
    case TurkbotActionTypes.DeleteTurkbot:
    case TurkbotActionTypes.DeleteTurkbots: {
      return { ...state, loading: true }
    }

    case TurkbotActionTypes.UpsertTurkbot: {
      return {
        ...adapter.upsertOne(action.payload.turkbot, state),
        loaded: true,
        loading: false,
      }
    }

    case TurkbotActionTypes.UpsertTurkbots: {
      return {
        ...adapter.upsertMany(action.payload.turkbots, state),
        loaded: true,
        loading: false,
      }
    }

    case TurkbotActionTypes.RemoveTurkbot: {
      return {
        ...adapter.removeOne(action.payload.id, state),
        loading: false
      }
    }

    case TurkbotActionTypes.RemoveTurkbots: {
      return {
        ...adapter.removeMany(action.payload.ids, state),
        loading: false
      }
    }

    case TurkbotActionTypes.ClearTurkbots: {
      return adapter.removeAll(state)
    }

    default: {
      return state
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors()

export const selectAllTurkbots = selectAll
export const selectTurkbotEntities = selectEntities
export const selectTurkbotIds = selectIds
export const selectTurkbotTotal = selectTotal
