import { lazy, Suspense } from 'react'
import { propTypes } from './NotFoundPage.prop'

const LazyNotFoundPage = lazy(() => import('./NotFoundPage'))

export function AsyncNotFoundPage() {
  return (
    <Suspense fallback={null}>
      <LazyNotFoundPage />
    </Suspense>
  )
}

AsyncNotFoundPage.propTypes = propTypes
