import { combineReducers } from 'redux'
import {
  CONTEXT_SET_NAVIGATION,
  CONTEXT_SET_PROGRESS,
  UI_CREATE_LIST_CARS,
  UI_UPDATE_LIST_CARS,
  UI_DELETE_LIST_CARS,
  UI_SELECT_LIST_CARS,
  UI_SET_LIST_CARS_EDIT,
  UI_SET_LIST_CARS_SORT,
  UI_SET_LIST_CARS_SEARCH,
  UI_SET_LIST_CARS_PAGINATION,
  UI_SELECT_BEST_CARS,
  UI_SET_BEST_CARS_SORT,
  UI_SET_BEST_CARS_SEARCH,
  UI_SET_BEST_CARS_PAGINATION,
} from '../action/actionTypes'

import { contextSetNavigation } from './context/navigation/set'
import { contextSetProgress } from './context/progress/set'

import { uiCreateListCars } from './ui/listCars/create'
import { uiUpdateListCars } from './ui/listCars/update'
import { uiDeleteListCars } from './ui/listCars/delete'
import { uiSelectListCars } from './ui/listCars/select'
import { uiSetListCarsEdit } from './ui/listCars/edit'
import { uiSetListCarsSort } from './ui/listCars/sort'
import { uiSetListCarsSearch } from './ui/listCars/search'
import { uiSetListCarsPagination } from './ui/listCars/pagination'

import { uiSelectBestCars } from './ui/bestCars/select'
import { uiSetBestCarsSort } from './ui/bestCars/sort'
import { uiSetBestCarsSearch } from './ui/bestCars/search'
import { uiSetBestCarsPagination } from './ui/bestCars/pagination'

export const getAppReducer = () =>
  combineReducers({
    // eslint-disable-next-line default-param-last
    context: (state = {}, action) => {
      switch (action.type) {
        case CONTEXT_SET_NAVIGATION:
          return contextSetNavigation(state, action)
        case CONTEXT_SET_PROGRESS:
          return contextSetProgress(state, action)
        default:
          return state
      }
    },
    // eslint-disable-next-line default-param-last
    ui: (state = {}, action) => {
      switch (action.type) {
        case UI_CREATE_LIST_CARS:
          return uiCreateListCars(state, action)
        case UI_UPDATE_LIST_CARS:
          return uiUpdateListCars(state, action)
        case UI_DELETE_LIST_CARS:
          return uiDeleteListCars(state, action)
        case UI_SELECT_LIST_CARS:
          return uiSelectListCars(state, action)
        case UI_SET_LIST_CARS_EDIT:
          return uiSetListCarsEdit(state, action)
        case UI_SET_LIST_CARS_SORT:
          return uiSetListCarsSort(state, action)
        case UI_SET_LIST_CARS_SEARCH:
          return uiSetListCarsSearch(state, action)
        case UI_SET_LIST_CARS_PAGINATION:
          return uiSetListCarsPagination(state, action)
        case UI_SELECT_BEST_CARS:
          return uiSelectBestCars(state, action)
        case UI_SET_BEST_CARS_SORT:
          return uiSetBestCarsSort(state, action)
        case UI_SET_BEST_CARS_SEARCH:
          return uiSetBestCarsSearch(state, action)
        case UI_SET_BEST_CARS_PAGINATION:
          return uiSetBestCarsPagination(state, action)
        default:
          return state
      }
    },
  })
