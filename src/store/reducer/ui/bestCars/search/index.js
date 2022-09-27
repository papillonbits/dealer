import { sortObjects } from '@papillonbits/library/sort'
import { getPagination } from '@papillonbits/library/pagination'
import { getBestCarsObjectsByCost } from '../get'

export function getBestCarsSearch({ state, action }) {
  const newSearch = {
    fuelPrice: action.payload?.fuelPrice ?? state.bestCars.search?.fuelPrice,
    monthlyTravelDistance: action.payload?.monthlyTravelDistance ?? state.bestCars.search?.monthlyTravelDistance,
    yearPeriod: action.payload?.yearPeriod ?? state.bestCars.search?.yearPeriod,
    carsObjects:
      !action.payload.fuelPrice && !action.payload.monthlyTravelDistance && !action.payload.yearPeriod && !state.bestCars.search
        ? null
        : getBestCarsObjectsByCost({
            objects: state.bestCars.carsObjects,
            fuelPrice: action.payload?.fuelPrice,
            monthlyTravelDistance: action.payload?.monthlyTravelDistance,
            yearPeriod: action.payload?.yearPeriod,
          }),
  }

  return newSearch
}

export function uiSetBestCarsSearch(state, action) {
  const newSearch = getBestCarsSearch({ state, action })

  const newPagination = getPagination({
    searchObjects: newSearch.carsObjects,
    regularObjects: state.bestCars.carsObjects,
    pagination: state.bestCars.pagination,
  })

  return {
    ...state,
    bestCars: {
      ...state.bestCars,
      carsObjects: sortObjects({ sort: state.bestCars.sort, objects: state.bestCars.carsObjects }),
      pagination: newPagination,
      search: {
        ...newSearch,
        carsObjects: sortObjects({ sort: state.bestCars.sort, objects: newSearch.carsObjects }),
      },
    },
  }
}
