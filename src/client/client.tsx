import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from '../apollo/apollo-client/create-client'
import Routes from '../components/routes'
import Header from '../components/header'

const initialState = window.__APOLLO_STATE__
const client = createApolloClient(initialState, undefined)
const rootElement = document.getElementById('root')
if (!rootElement) {
  throw Error('root not found')
}

const root = createRoot(rootElement)
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Header/>
      <Routes/>
    </BrowserRouter>
  </ApolloProvider>
)
