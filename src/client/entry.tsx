import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './create-apollo-client'
import LoadingSpinner from '../shared/components/loading-spinner'
import '../shared/components/landing/landing.module.css' // included to prevent FOUC from React.Suspense

// lazy load Landing
const Landing = React.lazy(() => import('../shared/components/landing'))

const initialState = window.__APOLLO_STATE__
const client = createApolloClient(initialState, undefined)

const container = document.getElementById('root')
if (!container) {
  throw new Error('root not found')
}
const root = ReactDOMClient.createRoot(container) // create a root
const fallback = <LoadingSpinner />

// render/hydrate root
root.render(
  <ApolloProvider client={client}>
    <React.Suspense fallback={fallback}>
      <link rel="stylesheet" type="text/css" href="/styles.css"></link>
      <Landing />
    </React.Suspense>
  </ApolloProvider>
)