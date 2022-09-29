import { sortOrder } from '@papillonbits/library/sort'

export const pageSize = Object.freeze({
  cars: 15,
})

export const pageNumber = 1
export const maxRange = 500

export const eventKey = Object.freeze({
  enter: 'Enter',
  escape: 'Escape',
})

export const timeout = Object.freeze({
  alert: 1000,
  fetch: 500,
})

export const messageType = Object.freeze({
  info: 'info',
  warning: 'warning',
  error: 'error',
  success: 'success',
  consent: 'consent',
})

export const pageContent = Object.freeze({
  listCar: { subheadHeadingLeft: 'List Cars', subheadHeadingRight: 'Search Stock', contextNavigationItemText: 'List Cars' },
  bestCar: { subheadHeadingLeft: 'Best Cars', subheadHeadingRight: 'Top Deals', contextNavigationItemText: 'Best Cars' },
})

export const fuelPriceRange = {
  min: 0.5,
  max: 2,
}

export const monthlyTravelDistanceRange = {
  min: 100,
  max: 2000,
}

export const yearPeriodRange = {
  min: 1,
  max: 10,
}

export const costDefaults = {
  fuelPrice: 0.73,
  monthlyTravelDistance: 250,
  yearPeriod: 4,
  sort: {
    index: 15,
    value: 'cost',
    order: sortOrder.ascending,
  },
}
