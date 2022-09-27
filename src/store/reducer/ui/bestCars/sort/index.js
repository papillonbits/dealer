import { getSort, sortObjects } from '@papillonbits/library/sort'

export function uiSetBestCarsSort(state, action) {
  const newSort = getSort({ currentSort: state.bestCars.sort, newSort: action.payload.newSort })

  return {
    ...state,
    bestCars: {
      ...state.bestCars,
      carsObjects: sortObjects({ sort: newSort, objects: state.bestCars.carsObjects }),
      search: {
        ...state.bestCars.search,
        carsObjects: sortObjects({ sort: newSort, objects: state.bestCars.search.carsObjects }),
      },
      sort: newSort,
    },
  }
}
