import { selectCarsObjects } from './carsObjects'
import { getBestCarsSearch } from '../get'

export function uiSelectBestCars(state, action) {
  const newCarsObjects = selectCarsObjects({
    carsObjects: state.bestCars.carsObjects,
    changedObjects: action.payload.changedObjects,
  })

  const newSearchCarsObjects = selectCarsObjects({
    carsObjects: state.bestCars.search.carsObjects,
    changedObjects: action.payload.changedObjects,
  })

  const newSearch = getBestCarsSearch({ search: state.bestCars.search, newSearchCarsObjects })

  return {
    ...state,
    bestCars: {
      ...state.bestCars,
      carsObjects: newCarsObjects,
      search: {
        ...newSearch,
        carsObjects: newSearch.carsObjects,
      },
    },
  }
}
