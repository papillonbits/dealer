import { BestCarTemplate } from '../../template/BestCarTemplate'
import { defaultProps, propTypes } from './BestCarPage.prop'

export function BestCarPage() {
  return <BestCarTemplate />
}

BestCarPage.defaultProps = defaultProps

BestCarPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default BestCarPage
