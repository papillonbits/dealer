import { primer } from '@papillonbits/components'
import { defaultProps, propTypes } from './Navigator.prop'
import { useNavigatorState } from './Navigator.hook'
import styles from './Navigator.scss'

export function Navigator({ headingLeft, headingRight }) {
  const {
    Navigation: { TabNav, tabNavState },
    Subhead,
  } = primer

  const { navigator, navigatorHeading } = styles

  const { navigation, progress, navigationTabNavOnClick } = useNavigatorState()

  return (
    <div className={navigator}>
      <Subhead className={navigatorHeading} heading={headingLeft} />
      <TabNav
        ariaAttr={navigation.ariaAttr}
        items={navigation.items}
        onClick={navigationTabNavOnClick}
        state={progress.isLoading ? tabNavState.inactive : tabNavState.active}
      />
      <Subhead className={navigatorHeading} heading={headingRight} />
    </div>
  )
}

Navigator.defaultProps = defaultProps

Navigator.propTypes = propTypes
