import * as types from '../actionTypes'

describe('actionTypes', () => {
  test('must return all action types', () => {
    expect(types).toHaveProperty('CONTEXT_SET_NAVIGATION')
    expect(types).toHaveProperty('CONTEXT_SET_PROGRESS')
    expect(types).toHaveProperty('UI_CREATE_LIST_CARS')
    expect(types).toHaveProperty('UI_UPDATE_LIST_CARS')
    expect(types).toHaveProperty('UI_DELETE_LIST_CARS')
    expect(types).toHaveProperty('UI_SELECT_LIST_CARS')
    expect(types).toHaveProperty('UI_SET_LIST_CARS_EDIT')
    expect(types).toHaveProperty('UI_SET_LIST_CARS_SORT')
    expect(types).toHaveProperty('UI_SET_LIST_CARS_SEARCH')
    expect(types).toHaveProperty('UI_SET_LIST_CARS_PAGINATION')
    expect(types).toHaveProperty('UI_SELECT_BEST_CARS')
    expect(types).toHaveProperty('UI_SET_BEST_CARS_SORT')
    expect(types).toHaveProperty('UI_SET_BEST_CARS_SEARCH')
    expect(types).toHaveProperty('UI_SET_BEST_CARS_PAGINATION')
  })
})
