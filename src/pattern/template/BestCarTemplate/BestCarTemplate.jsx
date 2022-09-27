import { primer } from '@papillonbits/components'
import { Navigator } from '../../molecule/Navigator'
import { defaultProps, propTypes } from './BestCarTemplate.prop'
import { useBestCarState } from './BestCarTemplate.hook'
import styles from './BestCarTemplate.scss'

export function BestCarTemplate() {
  const {
    Alert: { Alert, alertVariant },
    Form: {
      Input: { Input, inputState },
    },
    Grid: { FlexGrid, flexGridSelection, flexGridState },
    Label,
    Pagination: { PreviousNext, previousNextState },
  } = primer

  const {
    container,
    alert,
    content,
    contentDisplay,
    contentDisplaySearch,
    contentDisplaySearchPart,
    contentDisplaySearchPartField,
    contentDisplaySearchPartFieldInput,
    contentDisplaySearchPartFieldLabel,
    contentDisplayGridBestCars,
    contentDisplayPagination,
  } = styles

  const {
    alertTextBestCars,
    pageContent: {
      bestCar: { subheadHeadingLeft, subheadHeadingRight },
    },
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
  } = useBestCarState()

  return (
    <div className={container}>
      <Alert className={alert} variant={progress.message.type} consent={progress?.consent}>
        {progress.message.text}
      </Alert>
      <Navigator headingLeft={subheadHeadingLeft} headingRight={subheadHeadingRight} />
      <div className={content}>
        <div className={contentDisplay}>
          <div className={contentDisplaySearch}>
            <div className={contentDisplaySearchPart}>
              <div className={contentDisplaySearchPartField}>
                <Label
                  className={contentDisplaySearchPartFieldLabel}
                  text={`Fuel Price (€/L). Enter a value between ${fuelPriceRange.min} and ${fuelPriceRange.max}`}
                />
                <Input
                  value={search.fuelPrice || ''}
                  className={contentDisplaySearchPartFieldInput}
                  placeholder="Type fuel price and press Enter to search. Press ESC to clear."
                  ariaAttr={{ label: 'Type in fuel price' }}
                  onChange={searchFuelPriceOnChange}
                  onKeyUp={searchFuelPriceOnKeyUp}
                  onFocus={searchFuelPriceOnFocus}
                  onBlur={searchFuelPriceOnBlur}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
              <div className={contentDisplaySearchPartField}>
                <Label
                  className={contentDisplaySearchPartFieldLabel}
                  text={`Period (number of years). Enter a value between ${yearPeriodRange.min} and ${yearPeriodRange.max}`}
                />
                <Input
                  value={search.yearPeriod || ''}
                  className={contentDisplaySearchPartFieldInput}
                  placeholder="Type year period and press Enter to search. Press ESC to clear."
                  ariaAttr={{ label: 'Type in year period' }}
                  onChange={searchYearPeriodOnChange}
                  onKeyUp={searchYearPeriodOnKeyUp}
                  onFocus={searchYearPeriodOnFocus}
                  onBlur={searchYearPeriodOnBlur}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
            </div>
            <div className={contentDisplaySearchPart}>
              <div className={contentDisplaySearchPartField}>
                <Label
                  className={contentDisplaySearchPartFieldLabel}
                  text={`Montly Travel Distance (km). Enter a value between ${monthlyTravelDistanceRange.min} and ${monthlyTravelDistanceRange.max}`}
                />
                <Input
                  value={search.monthlyTravelDistance || ''}
                  className={contentDisplaySearchPartFieldInput}
                  placeholder="Type monthly travel distance and press Enter to search. Press ESC to clear."
                  ariaAttr={{ label: 'Type in monthly travel distance' }}
                  onChange={searchMonthlyTravelDistanceOnChange}
                  onKeyUp={searchMonthlyTravelDistanceOnKeyUp}
                  onFocus={searchMonthlyTravelDistanceOnFocus}
                  onBlur={searchMonthlyTravelDistanceOnBlur}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
            </div>
          </div>
          {paginatedRandomCarsObjectsNamesValues?.length === 0 && (
            <Alert className={alert} variant={alertVariant.warning}>
              {alertTextBestCars.display.noCars}
            </Alert>
          )}
          <PreviousNext
            className={contentDisplayPagination}
            ariaAttr={{ label: 'Pagination Top' }}
            currentPage={currentPage}
            onClick={paginationOnClick}
            state={progress.isLoading ? previousNextState.inactive : previousNextState.active}
          />
          <FlexGrid
            className={contentDisplayGridBestCars}
            items={paginatedRandomCarsObjectsNamesValues}
            idIndex={0}
            isSelectedIndex={1}
            selection={flexGridSelection.checkbox}
            sort={sort}
            onChange={carsObjectsFlexGridOnChange}
            onClick={carsObjectsFlexGridOnClick}
            onDoubleClick={() => {}}
            state={progress.isLoading ? flexGridState.inactive : flexGridState.active}
          />
          <PreviousNext
            className={contentDisplayPagination}
            ariaAttr={{ label: 'Pagination Bottom' }}
            currentPage={currentPage}
            onClick={paginationOnClick}
            state={progress.isLoading ? previousNextState.inactive : previousNextState.active}
          />
        </div>
      </div>
      <Alert className={alert} variant={progress.message.type} consent={progress?.consent}>
        {progress.message.text}
      </Alert>
    </div>
  )
}

BestCarTemplate.defaultProps = defaultProps

BestCarTemplate.propTypes = propTypes
