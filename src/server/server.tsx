import express, { Application, Request, Response } from 'express'
import React from 'react'
import dotenv from 'dotenv'
import ReactDOMServer from 'react-dom/server'
import server from '../apollo/apollo-server/create-apollo-server'
import { ApolloProvider } from '@apollo/client/react'
import { getDataFromTree } from '@apollo/client/react/ssr'
import createApolloClient from '../apollo/apollo-client/create-client'
import { expressMiddleware } from '@apollo/server/express4'
import { StaticRouter } from 'react-router-dom/server'
import { Helmet } from 'react-helmet'
import Routes from '../components/routes'

dotenv.config()
const app: Application = express()

const startServer = async () => {
  if (process.env.PUBLIC_GRAPHQL_PATH === undefined) {
    throw new Error('Environment variable PUBLIC_GRAPHQL_PATH not defined')
  }
  if (process.env.PUBLIC_EXPRESS_URI === undefined) {
    throw new Error('Environment variable PUBLIC_EXPRESS_URI not defined')
  }
  if (process.env.PORT === undefined) {
    throw new Error('Environment variable PORT not defined')
  }

  try {
    await server.start();
    app.use(express.json()); // Parse JSON bodies
    app.use(process.env.PUBLIC_GRAPHQL_PATH, expressMiddleware(server));

    // Serve static files (if necessary for your client app)
    app.use(express.static('dist'))

    // Other routes or middleware
    app.get('/*', async (req: Request, res: Response) => {
      const client = createApolloClient({}, req)

      const AppWithProvider = ReactDOMServer.renderToString(
        <ApolloProvider client={client}>
          <StaticRouter location={req.url}>
            <Routes />
          </StaticRouter>
        </ApolloProvider>
      )

      try {
        // Wait for all queries to be fetched
        await getDataFromTree(AppWithProvider)

        // Render the component to a string
        const content = ReactDOMServer.renderToString(AppWithProvider)

        // Extract the initial state from the Apollo store
        const initialState = client.extract()

        const index = `
          <html>
            <head>
              <title>SSR React App</title>
              <link rel="stylesheet" href="/styles.css">
            </head>
            <body>
              <div id="root">${content}</div>
              <script>
                window.__APOLLO_STATE__ = ${JSON.stringify(initialState).replace(/</g, '\\u003c')}
              </script>
              <script src="client.bundle.js"></script>
            </body>
          </html>
          `

        const helmet = Helmet.renderStatic()

        const html = index
          .replace('<div id="root"></div>', `<div id="root">${AppWithProvider}</div>`)
          .replace('</head>', `${helmet.title.toString()}${helmet.meta.toString()}</head>`);

        res.send(html)
      } catch(e) {
        console.error('Error during server-side rendering:', e)
        res.status(500).send("Internal Server Error")
      }
    })

    // Start the express server
    app.listen(process.env.PORT, () => {
      console.log(`Express server is running on ${process.env.PUBLIC_EXPRESS_URI}`)
      console.log(`Apollo Server is running on ${process.env.PUBLIC_EXPRESS_URI}${process.env.PUBLIC_GRAPHQL_PATH}`)
    })
  } catch(e) {
    console.log(e)
  }
}

startServer()