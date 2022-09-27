import { getSelectedItem, getItemsDefaultSelected } from '@papillonbits/library/array'
import { sortObjects } from '@papillonbits/library/sort'
import { getListCarsSearch } from '../get'
import { getBestCarsSearch } from '../../bestCars/get'
import { updateCarsObjects } from './carsObjects'
import { carBrands } from '../../../../../library/constant/carBrands'
import { carBodyworks } from '../../../../../library/constant/carBodyworks'
import { carColors } from '../../../../../library/constant/carColors'
import { carFuels } from '../../../../../library/constant/carFuels'
import { carTransmissions } from '../../../../../library/constant/carTransmissions'
import { carYears } from '../../../../../library/constant/carYears'

export function uiUpdateListCars(state) {
  const newCarsObjects = {
    listCars: updateCarsObjects({
      carsObjects: state.listCars.carsObjects,
      object: state.listCars.edit,
    }),
    bestCars: updateCarsObjects({
      carsObjects: state.bestCars.carsObjects,
      object: state.listCars.edit,
    }),
  }

  const newSearchCarsObjects = {
    listCars: updateCarsObjects({
      carsObjects: state.listCars.search.carsObjects,
      object: state.listCars.edit,
    }),
    bestCars: updateCarsObjects({
      carsObjects: state.bestCars.search.carsObjects,
      object: state.listCars.edit,
    }),
  }

  const newSearch = {
    listCars: getListCarsSearch({ search: state.listCars.search, newSearchCarsObjects: newSearchCarsObjects.listCars }),
    bestCars: getBestCarsSearch({ search: state.bestCars.search, newSearchCarsObjects: newSearchCarsObjects.bestCars }),
  }

  return {
    ...state,
    listCars: {
      ...state.listCars,
      carsObjects: sortObjects({ sort: state.listCars.sort, objects: newCarsObjects.listCars }),
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
      search: {
        ...newSearch.bestCars,
        carsObjects: sortObjects({ sort: state.bestCars.sort, objects: newSearch.bestCars.carsObjects }),
      },
    },
  }
}
