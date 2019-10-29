import { createFeatureSelector, createSelector } from '@ngrx/store'
import { selectAllTurkbots, selectTurkbotEntities, State } from './turkbot.reducer'
import { getParams } from '../router/router.selectors'

export const getTurkbotFeature = createFeatureSelector<State>('turkbot')
export const getAllTurkbots = createSelector(getTurkbotFeature, selectAllTurkbots)
export const getTurkbotEntities = createSelector(getTurkbotFeature, selectTurkbotEntities)
export const getTurkbotsLoaded = createSelector(getTurkbotFeature, (state) => state.loaded)
export const getTurkbotsLoading = createSelector(getTurkbotFeature, (state) => state.loading)

export const getCurrentTurkbot = createSelector(
  getParams,
  getTurkbotEntities,
  (params, entities) => {
    if (entities[params.id] === undefined) return null
    else return entities[params.id]
  }
)

export const getNumberOfTurkbots = createSelector(
  getAllTurkbots,
  (turkBots) => {
    return turkBots.length
  }
)
