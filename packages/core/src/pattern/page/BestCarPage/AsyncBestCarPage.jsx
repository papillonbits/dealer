import { lazy, Suspense } from 'react'
import { propTypes } from './BestCarPage.prop'

const LazyBestCarPage = lazy(() => import('./BestCarPage'))

export function AsyncBestCarPage() {
  return (
    <Suspense fallback={null}>
      <LazyBestCarPage />
    </Suspense>
  )
}

AsyncBestCarPage.propTypes = propTypes
