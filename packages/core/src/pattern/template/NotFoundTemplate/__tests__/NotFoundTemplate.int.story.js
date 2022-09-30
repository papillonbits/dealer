import { MemoryRouter } from 'react-router-dom'
import { withTests } from '@storybook/addon-jest'
import { NotFoundTemplate } from '../NotFoundTemplate'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Dealer/Template/NotFoundTemplate',
  component: NotFoundTemplate,
  decorators: [withTests({ results })],
  parameters: { jest: ['NotFoundTemplate.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <MemoryRouter>
      <NotFoundTemplate />
    </MemoryRouter>
  )
}
