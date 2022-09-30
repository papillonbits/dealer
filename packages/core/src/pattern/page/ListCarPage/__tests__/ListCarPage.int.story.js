import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { getAppMockStore } from '@papillonbits/library/store'
import { withTests } from '@storybook/addon-jest'
import { state } from '../../../../state'
import { AsyncListCarPage } from '../AsyncListCarPage'
import { ListCarPage } from '../ListCarPage'
import results from '../../../../../../../.jest-test-results.json'

const {
  mock: { appState },
} = state

export default {
  title: 'Dealer/Page/ListCarPage',
  component: ListCarPage,
  decorators: [withTests({ results })],
  parameters: { jest: ['ListCarPage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <MemoryRouter>
        <AsyncListCarPage />
      </MemoryRouter>
    </Provider>
  )
}

export function regular() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <MemoryRouter>
        <ListCarPage />
      </MemoryRouter>
    </Provider>
  )
}
