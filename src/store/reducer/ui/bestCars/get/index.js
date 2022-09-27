export function getBestCarsObjectsByCost({ objects, fuelPrice, monthlyTravelDistance, yearPeriod }) {
  const numberOfMonthsInYear = 12

  if (!fuelPrice || !monthlyTravelDistance || !yearPeriod) {
    return objects
  }

  const objectsByCost = objects.map((object) => {
    const totalPurchaseCost = object.price

    const totalMaintenanceCost = object.maintenance * yearPeriod

    const totalTravelDistance = monthlyTravelDistance * numberOfMonthsInYear * yearPeriod
    const totalFuelConsumption = object.consumption === 0 ? 0 : totalTravelDistance / object.consumption
    const totalFuelCost = totalFuelConsumption * fuelPrice

    const totalCostOverYears = totalPurchaseCost + totalMaintenanceCost + totalFuelCost

    return {
      ...object,
      cost: totalCostOverYears.toFixed(2),
    }
  })

  return objectsByCost
}

export function getBestCarsSearch({ search, newSearchCarsObjects }) {
  const newSearch = {
    fuelPrice: search?.fuelPrice,
    monthlyTravelDistance: search?.monthlyTravelDistance,
    yearPeriod: search?.yearPeriod,
    carsObjects: !search
      ? null
      : getBestCarsObjectsByCost({
          objects: newSearchCarsObjects,
          fuelPrice: search?.fuelPrice,
          monthlyTravelDistance: search?.monthlyTravelDistance,
          yearPeriod: search?.yearPeriod,
        }),
  }

  return newSearch
}
