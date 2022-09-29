import { Link } from 'react-router-dom'
import { pageContent } from '../../../library/constant'

import { listCarPagePath, bestCarPagePath } from '../../../route/path'

export const navigation = {
  ariaAttr: {
    label: pageContent.listCar.contextNavigationItemText,
    current: 'page',
  },
  items: [
    {
      link: {
        component: Link,
        props: { ...{ to: listCarPagePath } },
        children: pageContent.listCar.contextNavigationItemText,
      },
      isSelected: true,
      enabled: true,
      visible: true,
    },
    {
      link: {
        component: Link,
        props: { ...{ to: bestCarPagePath } },
        children: pageContent.bestCar.contextNavigationItemText,
      },
      isSelected: false,
      enabled: true,
      visible: true,
    },
  ],
}
