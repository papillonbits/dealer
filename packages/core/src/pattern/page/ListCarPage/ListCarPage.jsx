import { ListCarTemplate } from '../../template/ListCarTemplate'
import { propTypes } from './ListCarPage.prop'

export function ListCarPage() {
  return <ListCarTemplate />
}

ListCarPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ListCarPage
