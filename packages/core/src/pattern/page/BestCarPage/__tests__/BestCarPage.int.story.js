import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { getAppMockStore } from '@papillonbits/library/store'
import { withTests } from '@storybook/addon-jest'
import { state } from '../../../../state'
import { AsyncBestCarPage } from '../AsyncBestCarPage'
import { BestCarPage } from '../BestCarPage'
import results from '../../../../../../../.jest-test-results.json'

const {
  mock: { appState },
} = state

export default {
  title: 'Dealer/Page/BestCarPage',
  component: BestCarPage,
  decorators: [withTests({ results })],
  parameters: { jest: ['BestCarPage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <MemoryRouter>
        <AsyncBestCarPage />
      </MemoryRouter>
    </Provider>
  )
}

export function regular() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <MemoryRouter>
        <BestCarPage />
      </MemoryRouter>
    </Provider>
  )
}
