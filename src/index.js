import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
})

const CodeSnip =
<ApolloProvider client={client}>
  <App />
</ApolloProvider>

ReactDOM.render(CodeSnip, document.getElementById('root'));
registerServiceWorker();
