import { costDefaults } from '../../../library/constant'
import { getNewCars } from '../../../store/reducer/ui/newCars/random/cars'
import { getBestCarsObjectsByCost } from '../../../store/reducer/ui/bestCars/get'

const newCars = getNewCars()

export const ui = {
  listCars: newCars,
  bestCars: {
    pagination: newCars.pagination,
    carsObjects: newCars.carsObjects,
    search: {
      fuelPrice: costDefaults.fuelPrice,
      monthlyTravelDistance: costDefaults.monthlyTravelDistance,
      yearPeriod: costDefaults.yearPeriod,
      carsObjects: getBestCarsObjectsByCost({
        objects: newCars.carsObjects,
        fuelPrice: costDefaults.fuelPrice,
        monthlyTravelDistance: costDefaults.monthlyTravelDistance,
        yearPeriod: costDefaults.yearPeriod,
      }),
    },
    sort: costDefaults.sort,
  },
}
