import { regular } from './BestCarTemplate.int.story'

describe('<BestCarTemplate />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
