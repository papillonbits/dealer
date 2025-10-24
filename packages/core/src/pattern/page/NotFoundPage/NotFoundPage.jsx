import { NotFoundTemplate } from '../../template/NotFoundTemplate'
import { propTypes } from './NotFoundPage.prop'

export function NotFoundPage() {
  return <NotFoundTemplate />
}

NotFoundPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default NotFoundPage
