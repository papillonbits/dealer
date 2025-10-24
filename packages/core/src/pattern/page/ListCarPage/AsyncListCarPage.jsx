import { lazy, Suspense } from 'react'
import { propTypes } from './ListCarPage.prop'

const LazyListCarPage = lazy(() => import('./ListCarPage'))

export function AsyncListCarPage() {
  return (
    <Suspense fallback={null}>
      <LazyListCarPage />
    </Suspense>
  )
}

AsyncListCarPage.propTypes = propTypes
