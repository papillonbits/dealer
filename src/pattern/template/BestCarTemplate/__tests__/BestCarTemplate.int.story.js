import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { getAppMockStore } from '@papillonbits/library/store'
import { withTests } from '@storybook/addon-jest'
import { state } from '../../../../state'
import { BestCarTemplate } from '../index'
import results from '../../../../../../../.jest-test-results.json'

const {
  mock: { appState },
} = state

export default {
  title: 'Dealer/Template/BestCarTemplate',
  component: BestCarTemplate,
  decorators: [withTests({ results })],
  parameters: { jest: ['BestCarTemplate.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <BrowserRouter>
        <BestCarTemplate />
      </BrowserRouter>
    </Provider>
  )
}
