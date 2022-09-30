import { regular } from './NotFoundTemplate.int.story'

describe('<NotFoundTemplate />', () => {
  describe('Render', () => {
    test('must match regular', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
