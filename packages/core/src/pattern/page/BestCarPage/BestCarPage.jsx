import { BestCarTemplate } from '../../template/BestCarTemplate'
import { propTypes } from './BestCarPage.prop'

export function BestCarPage() {
  return <BestCarTemplate />
}

BestCarPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default BestCarPage
