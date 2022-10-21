# 🎉 Dealer App 🎉

- Check out the dealer app in action [here](https://papillonbits.github.io/dealer/).

# 📚 Features

> As a car dealer, I want to browse the cars I have in stock and give purchase recommendations tailored to the needs of my customers. More specifically the following:

## 📗 Feature 1

> As a car dealer, I want to search for cars by year and make.

- 📖&nbsp; Example:
  - Given the year 2018, I should get the Citroen C3 and Honda Fit.
  - Given the brand Citroën, I should get the Citroen C3 2018.
  - Leaving the search string blank should return a list of all cars.

## 📗 Feature 2

> As a car dealer, I want to be able to add new cars to my store.

- 📖&nbsp; Example:
  - I will enter the car's model, make, version, year of release, price, fuel consumption, and annual maintenance cost. The car will show up in the results returned by feature 1.

## 📗 Feature 3

> As a car dealer, I want to recommend to my clients the car with the lowest total annual cost over a period of four (4) years.

- 📖&nbsp; Given the price of fuel (€/L) and the expected distance to travel each month (km/month).
- 📖&nbsp; Relevant car parameters are price of the car (€), fuel consumption (km/l), and annual maintenance cost.
- 📖&nbsp; Example:
  - Given that I expect to travel 250 km each month for the next 4 years, and the expected price of fuel is 0.73 €/L,
    what is the ranking of cars according to their total annual cost?

# 📚 Concepts

> Sharing is caring. Check out the collection of [concepts](https://github.com/papillonbits/papillonbits/blob/master/.docs/concepts.md) which any maintainer needs to master in order to gracefully maintain this project and scale its implementation along with its unit, integration and end-to-end tests.
