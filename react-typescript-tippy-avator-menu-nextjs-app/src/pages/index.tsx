import { lazy, Suspense } from 'react'

import { type NextPage } from 'next'

import ErrorBoundary from '@/components/fallback/ErrorBoundary'
import FallbackPageLoading from '@/components/fallback/FallbackPageLoading'

const Home = lazy(() => import('@/features/home/components/Home'))

const HomePage: NextPage = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<FallbackPageLoading />}>
        <Home />
      </Suspense>
    </ErrorBoundary>
  )
}

export default HomePage
