import { getSelectedItem, getItemsDefaultSelected } from '@papillonbits/library/array'
import { getPagination } from '@papillonbits/library/pagination'
import { sortObjects } from '@papillonbits/library/sort'
import { getListCarsSearch } from '../get'
import { getBestCarsSearch } from '../../bestCars/get'
import { createCarsObjects } from './carsObjects'
import { carBrands } from '../../../../../library/constant/carBrands'
import { carBodyworks } from '../../../../../library/constant/carBodyworks'
import { carColors } from '../../../../../library/constant/carColors'
import { carFuels } from '../../../../../library/constant/carFuels'
import { carTransmissions } from '../../../../../library/constant/carTransmissions'
import { carYears } from '../../../../../library/constant/carYears'
import { getNewCarsObject } from '../../newCars/random/carsObjects'

export function uiCreateListCars(state) {
  const newCarsObject = getNewCarsObject({ object: state.listCars.edit })

  const newCarsObjects = {
    listCars: createCarsObjects({
      carsObjects: state.listCars.carsObjects,
      newCarsObject,
    }),
    bestCars: createCarsObjects({
      carsObjects: state.bestCars.carsObjects,
      newCarsObject,
    }),
  }

  const newSearchCarsObjects = {
    listCars: createCarsObjects({
      carsObjects: state.listCars.search.carsObjects,
      newCarsObject,
    }),
    bestCars: createCarsObjects({
      carsObjects: state.bestCars.search.carsObjects,
      newCarsObject,
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
