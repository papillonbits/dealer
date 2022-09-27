import { getSelectedItem, getItemsDefaultSelected } from '@papillonbits/library/array'
import { getPagination } from '@papillonbits/library/pagination'
import { sortObjects } from '@papillonbits/library/sort'
import { getListCarsSearch } from '../get'
import { getBestCarsSearch } from '../../bestCars/get'
import { deleteCarsObjects } from './carsObjects'
import { carBrands } from '../../../../../library/constant/carBrands'
import { carBodyworks } from '../../../../../library/constant/carBodyworks'
import { carColors } from '../../../../../library/constant/carColors'
import { carFuels } from '../../../../../library/constant/carFuels'
import { carTransmissions } from '../../../../../library/constant/carTransmissions'
import { carYears } from '../../../../../library/constant/carYears'

export function uiDeleteListCars(state, action) {
  const newCarsObjects = {
    listCars: deleteCarsObjects({
      carsObjects: state.listCars.carsObjects,
      selectedObjects: action.payload.selectedObjects,
    }),
    bestCars: deleteCarsObjects({
      carsObjects: state.bestCars.carsObjects,
      selectedObjects: action.payload.selectedObjects,
    }),
  }

  const newSearchCarsObjects = {
    listCars: deleteCarsObjects({
      carsObjects: state.listCars.search.carsObjects,
      selectedObjects: action.payload.selectedObjects,
    }),
    bestCars: deleteCarsObjects({
      carsObjects: state.bestCars.search.carsObjects,
      selectedObjects: action.payload.selectedObjects,
    }),
  }

  const newSearch = {
    listCars: getListCarsSearch({ search: state.listCars.search, newSearchCarsObjects: newSearchCarsObjects.listCars }),
    bestCars: getBestCarsSearch({ search: state.bestCars.search, newSearchCarsObjects: newSearchCarsObjects.bestCars }),
  }

  const newPagination = {
    listCars: getPagination({
      searchObjects: newSearch.listCars.carsObjects,
      regularObjects: newCarsObjects.listCars,
      pagination: state.listCars.pagination,
    }),
    bestCars: getPagination({
      searchObjects: newSearch.bestCars.carsObjects,
      regularObjects: newCarsObjects.bestCars,
      pagination: state.bestCars.pagination,
    }),
  }

  return {
    ...state,
    listCars: {
      ...state.listCars,
      carsObjects: sortObjects({ sort: state.listCars.sort, objects: newCarsObjects.listCars }),
      pagination: newPagination.listCars,
      search: {
        ...newSearch.listCars,
        carsObjects: sortObjects({ sort: state.listCars.sort, objects: newSearch.listCars.carsObjects }),
      },
      edit: {
        brand: getItemsDefaultSelected({ items: carBrands }),
        model: getItemsDefaultSelected({ items: getSelectedItem({ items: getItemsDefaultSelected({ items: carBrands }) }).models }),
        bodywork: getItemsDefaultSelected({ items: carBodyworks }),
        color: getItemsDefaultSelected({ items: carColors }),
        fuel: getItemsDefaultSelected({ items: carFuels }),
        transmission: getItemsDefaultSelected({ items: carTransmissions }),
        year: getItemsDefaultSelected({ items: carYears }),
      },
    },
    bestCars: {
      ...state.bestCars,
      carsObjects: sortObjects({ sort: state.bestCars.sort, objects: newCarsObjects.bestCars }),
      pagination: newPagination.bestCars,
      search: {
        ...newSearch.bestCars,
        carsObjects: sortObjects({ sort: state.bestCars.sort, objects: newSearch.bestCars.carsObjects }),
      },
    },
  }
}
