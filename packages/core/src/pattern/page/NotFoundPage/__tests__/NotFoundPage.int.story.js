import { MemoryRouter } from 'react-router-dom'
import { withTests } from '@storybook/addon-jest'
import { AsyncNotFoundPage } from '../AsyncNotFoundPage'
import { NotFoundPage } from '../NotFoundPage'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Dealer/Page/NotFoundPage',
  component: NotFoundPage,
  decorators: [withTests({ results })],
  parameters: { jest: ['NotFoundPage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return (
    <MemoryRouter>
      <AsyncNotFoundPage />
    </MemoryRouter>
  )
}

export function regular() {
  return (
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  )
}
