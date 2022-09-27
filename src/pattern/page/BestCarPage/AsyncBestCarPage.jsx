import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './BestCarPage.prop'

const LazyBestCarPage = lazy(() => import('./BestCarPage'))

export function AsyncBestCarPage() {
  return (
    <Suspense fallback={null}>
      <LazyBestCarPage />
    </Suspense>
  )
}

AsyncBestCarPage.defaultProps = defaultProps

AsyncBestCarPage.propTypes = propTypes
