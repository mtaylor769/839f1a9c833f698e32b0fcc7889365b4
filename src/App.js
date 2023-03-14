import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import * as Jotai from 'jotai';
import {DashboardPage} from './pages';
import {GQL_ENDPOINT} from 'dotenv';

// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: GQL_ENDPOINT,
});

const store = Jotai.createStore();
console.log({client, store});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Jotai.Provider store={store}>
        <DashboardPage />
      </Jotai.Provider>
    </ApolloProvider>
  );
}
