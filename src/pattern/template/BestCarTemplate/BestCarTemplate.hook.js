import { useSelector } from 'react-redux'
import { getSelectedItemText } from '@papillonbits/library/array'
import { paginate } from '@papillonbits/library/pagination'
import { useBindActionCreators } from '../../../store/dispatch'
import { eventKey, messageType, pageContent, fuelPriceRange, monthlyTravelDistanceRange, yearPeriodRange } from '../../../library/constant'
import { alertTextApp } from '../../../library/constant/alertText/app'
import { alertTextBestCars } from '../../../library/constant/alertText/bestCars'

export function useBestCarState() {
  const {
    uiSelectBestCarsAction,
    uiSetBestCarsSortAction,
    uiSetBestCarsSearchAction,
    uiSetBestCarsPaginationAction,
    contextSetProgressRegularThunk,
  } = useBindActionCreators()

  const progress = useSelector(({ context }) => context.progress)

  const {
    carsObjects,
    pagination: { pageSize, pageNumber, currentPage },
    sort,
    search,
  } = useSelector(({ ui }) => ui.bestCars)

  const paginatedRandomCarsObjects = paginate({
    array: search.carsObjects || carsObjects,
    pageSize,
    pageNumber,
  })

  const paginatedRandomCarsObjectsNamesValues = paginatedRandomCarsObjects.map((carsObject) =>
    (({ id, isSelected, license, brand, model, year, bodywork, color, fuel, transmission, modified, created, ...rest }) => ({
      names: Object.keys({
        id,
        isSelected,
        license,
        brand,
        model,
        year,
        bodywork,
        color,
        fuel,
        transmission,
        ...rest,
      }),
      values: Object.values({
        id,
        isSelected,
        license,
        brand: getSelectedItemText({ items: brand }),
        model: getSelectedItemText({ items: model }),
        year: getSelectedItemText({ items: year }),
        bodywork: getSelectedItemText({ items: bodywork }),
        color: getSelectedItemText({ items: color }),
        fuel: getSelectedItemText({ items: fuel }),
        transmission: getSelectedItemText({ items: transmission }),
        ...rest,
      }),
    }))(carsObject),
  )

  function isValidCostCalculationValue({ value, range }) {
    if (value.length === 0) {
      contextSetProgressRegularThunk({ message: { text: alertTextApp.validation.mustNotBeEmpty, type: messageType.warning } })
      return false
    }

    // eslint-disable-next-line
    if (isNaN(value)) {
      contextSetProgressRegularThunk({ message: { text: alertTextApp.validation.mustBeNumber, type: messageType.warning } })
      return false
    }

    if (value < range.min || value > range.max) {
      contextSetProgressRegularThunk({ message: { text: alertTextApp.validation.mustBeWithinRange, type: messageType.warning } })
      return false
    }

    return true
  }

  /* istanbul ignore next */
  function searchFuelPriceOnChange(event) {
    if (!isValidCostCalculationValue({ value: event.target.value, range: fuelPriceRange })) {
      return
    }

    uiSetBestCarsSearchAction({
      fuelPrice: event.target.value,
      monthlyTravelDistance: search.monthlyTravelDistance,
      yearPeriod: search.yearPeriod,
    })
  }

  /* istanbul ignore next */
  function searchFuelPriceOnKeyUp(event) {
    if (!isValidCostCalculationValue({ value: event.target.value, range: fuelPriceRange })) {
      return
    }

    if (event.key === eventKey.enter) {
      uiSetBestCarsSearchAction({
        fuelPrice: event.target.value,
        monthlyTravelDistance: search.monthlyTravelDistance,
        yearPeriod: search.yearPeriod,
      })
      return
    }
    if (event.key === eventKey.escape) {
      uiSetBestCarsSearchAction({
        fuelPrice: null,
        monthlyTravelDistance: search.monthlyTravelDistance,
        yearPeriod: search.yearPeriod,
      })
      return
    }

    uiSetBestCarsSearchAction({
      fuelPrice: search.fuelPrice,
      monthlyTravelDistance: search.monthlyTravelDistance,
      yearPeriod: search.yearPeriod,
    })
  }

  /* istanbul ignore next */
  function searchFuelPriceOnFocus() {
    uiSetBestCarsSearchAction({
      fuelPrice: search.fuelPrice,
      monthlyTravelDistance: search.monthlyTravelDistance,
      yearPeriod: search.yearPeriod,
    })
  }

  /* istanbul ignore next */
  function searchFuelPriceOnBlur() {}

  /* istanbul ignore next */
  function searchMonthlyTravelDistanceOnChange(event) {
    if (!isValidCostCalculationValue({ value: event.target.value, range: monthlyTravelDistanceRange })) {
      return
    }

    uiSetBestCarsSearchAction({
      fuelPrice: search.fuelPrice,
      monthlyTravelDistance: event.target.value,
      yearPeriod: search.yearPeriod,
    })
  }

  /* istanbul ignore next */
  function searchMonthlyTravelDistanceOnKeyUp(event) {
    if (!isValidCostCalculationValue({ value: event.target.value, range: monthlyTravelDistanceRange })) {
      return
    }

    if (event.key === eventKey.enter) {
      uiSetBestCarsSearchAction({
        fuelPrice: search.fuelPrice,
        monthlyTravelDistance: event.target.value,
        yearPeriod: search.yearPeriod,
      })
      return
    }
    if (event.key === eventKey.escape) {
      uiSetBestCarsSearchAction({
        fuelPrice: search.fuelPrice,
        monthlyTravelDistance: null,
        yearPeriod: search.yearPeriod,
      })
      return
    }

    uiSetBestCarsSearchAction({
      fuelPrice: search.fuelPrice,
      monthlyTravelDistance: search.monthlyTravelDistance,
      yearPeriod: search.yearPeriod,
    })
  }

  /* istanbul ignore next */
  function searchMonthlyTravelDistanceOnFocus() {
    uiSetBestCarsSearchAction({
      fuelPrice: search.fuelPrice,
      monthlyTravelDistance: search.monthlyTravelDistance,
      yearPeriod: search.yearPeriod,
    })
  }

  /* istanbul ignore next */
  function searchMonthlyTravelDistanceOnBlur() {}

  /* istanbul ignore next */
  function searchYearPeriodOnChange(event) {
    if (!isValidCostCalculationValue({ value: event.target.value, range: yearPeriodRange })) {
      return
    }

    uiSetBestCarsSearchAction({
      fuelPrice: search.fuelPrice,
      monthlyTravelDistance: search.monthlyTravelDistance,
      yearPeriod: event.target.value,
    })
  }

  /* istanbul ignore next */
  function searchYearPeriodOnKeyUp(event) {
    if (!isValidCostCalculationValue({ value: event.target.value, range: yearPeriodRange })) {
      return
    }

    if (event.key === eventKey.enter) {
      uiSetBestCarsSearchAction({
        fuelPrice: search.fuelPrice,
        monthlyTravelDistance: search.monthlyTravelDistance,
        yearPeriod: event.target.value,
      })
      return
    }
    if (event.key === eventKey.escape) {
      uiSetBestCarsSearchAction({
        fuelPrice: search.fuelPrice,
        monthlyTravelDistance: search.monthlyTravelDistance,
        yearPeriod: null,
      })
      return
    }

    uiSetBestCarsSearchAction({
      fuelPrice: search.fuelPrice,
      monthlyTravelDistance: search.monthlyTravelDistance,
      yearPeriod: search.yearPeriod,
    })
  }

  /* istanbul ignore next */
  function searchYearPeriodOnFocus() {
    uiSetBestCarsSearchAction({
      fuelPrice: search.fuelPrice,
      monthlyTravelDistance: search.monthlyTravelDistance,
      yearPeriod: search.yearPeriod,
    })
  }

  /* istanbul ignore next */
  function searchYearPeriodOnBlur() {}

  /* istanbul ignore next */
  function paginationOnClick(paginationAction) {
    uiSetBestCarsPaginationAction({ paginationAction })
    contextSetProgressRegularThunk({ message: { text: alertTextBestCars.pagination.browsing, type: messageType.info } })
  }

  /* istanbul ignore next */
  function carsObjectsFlexGridOnChange(changedObjects) {
    uiSelectBestCarsAction({ changedObjects })
  }

  /* !!! istanbul ignore next  !!! */
  function carsObjectsFlexGridOnClick(newSort) {
    uiSetBestCarsSortAction({ newSort })
  }

  return {
    alertTextBestCars,
    pageContent,
    fuelPriceRange,
    monthlyTravelDistanceRange,
    yearPeriodRange,
    progress,
    currentPage,
    sort,
    search,
    paginatedRandomCarsObjectsNamesValues,
    searchFuelPriceOnChange,
    searchFuelPriceOnKeyUp,
    searchFuelPriceOnFocus,
    searchFuelPriceOnBlur,
    searchMonthlyTravelDistanceOnChange,
    searchMonthlyTravelDistanceOnKeyUp,
    searchMonthlyTravelDistanceOnFocus,
    searchMonthlyTravelDistanceOnBlur,
    searchYearPeriodOnChange,
    searchYearPeriodOnKeyUp,
    searchYearPeriodOnFocus,
    searchYearPeriodOnBlur,
    paginationOnClick,
    carsObjectsFlexGridOnChange,
    carsObjectsFlexGridOnClick,
  }
}
